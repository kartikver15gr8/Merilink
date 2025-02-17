"use client";
import React, { useState } from "react";

export type CardLayout = "square" | "rectangle" | "tall";

export interface Card {
  id: string;
  content: string;
  layout: CardLayout;
}

export interface DraggableCardProps {
  id: string;
  index: number;
  children: React.ReactNode;
  layout: CardLayout;
  onLayoutChange: (id: string, layout: CardLayout) => void;
  moveCard: (fromId: string, toId: string) => void;
}

interface LayoutSelectorProps {
  onSelect: (layout: CardLayout) => void;
  currentLayout: CardLayout;
}

const LayoutSelector: React.FC<LayoutSelectorProps> = ({
  onSelect,
  currentLayout,
}) => {
  return (
    <div className="absolute -top-16 left-1/2 -translate-x-1/2 bg-white shadow-lg rounded-lg p-2 flex gap-2 z-10">
      <button
        onClick={() => onSelect("square")}
        className={`w-8 h-8 border rounded ${
          currentLayout === "square"
            ? "border-blue-500 bg-blue-50"
            : "border-gray-300"
        }`}
      />
      <button
        onClick={() => onSelect("rectangle")}
        className={`w-12 h-8 border rounded ${
          currentLayout === "rectangle"
            ? "border-blue-500 bg-blue-50"
            : "border-gray-300"
        }`}
      />
      <button
        onClick={() => onSelect("tall")}
        className={`w-8 h-12 border rounded ${
          currentLayout === "tall"
            ? "border-blue-500 bg-blue-50"
            : "border-gray-300"
        }`}
      />
    </div>
  );
};

// DraggableCard.tsx

export const DraggableCard: React.FC<DraggableCardProps> = ({
  id,
  children,
  layout,
  onLayoutChange,
  moveCard,
}) => {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [showLayoutSelector, setShowLayoutSelector] = useState<boolean>(false);

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>): void => {
    setIsDragging(true);
    e.dataTransfer.setData("cardId", id);
  };

  const handleDragEnd = (): void => {
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    const draggedCardId = e.dataTransfer.getData("cardId");
    if (draggedCardId !== id) {
      moveCard(draggedCardId, id);
    }
  };

  const getLayoutClasses = (layout: CardLayout): string => {
    const baseClasses = "transition-all duration-200";

    switch (layout) {
      case "square":
        return `${baseClasses} aspect-square`;
      case "rectangle":
        return `${baseClasses} aspect-[2/1]`;
      case "tall":
        return `${baseClasses} aspect-[1/2]`;
      default:
        return `${baseClasses} aspect-square`;
    }
  };

  return (
    <div
      className={`relative group ${
        layout === "rectangle" ? "col-span-2" : "col-span-1"
      }`}
      onMouseEnter={() => setShowLayoutSelector(true)}
      onMouseLeave={() => setShowLayoutSelector(false)}
    >
      {showLayoutSelector && (
        <LayoutSelector
          currentLayout={layout}
          onSelect={(newLayout) => onLayoutChange(id, newLayout)}
        />
      )}
      <div
        draggable
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className={`
          ${getLayoutClasses(layout)}
          p-4 bg-white rounded-lg shadow-md cursor-move
          ${isDragging ? "opacity-50" : "opacity-100"}
          hover:shadow-lg
        `}
      >
        {children}
      </div>
    </div>
  );
};

export const DraggableGrid: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([
    { id: "1", content: "Card 1", layout: "square" },
    { id: "2", content: "Card 2", layout: "square" },
    { id: "3", content: "Card 3", layout: "square" },
    { id: "4", content: "Card 4", layout: "square" },
    { id: "5", content: "Card 5", layout: "square" },
    { id: "6", content: "Card 6", layout: "square" },
    { id: "7", content: "Card 7", layout: "square" },
    { id: "8", content: "Card 8", layout: "square" },
  ]);

  const moveCard = (fromId: string, toId: string): void => {
    setCards((prevCards) => {
      const newCards = [...prevCards];
      const fromIndex = newCards.findIndex((card) => card.id === fromId);
      const toIndex = newCards.findIndex((card) => card.id === toId);

      if (fromIndex === -1 || toIndex === -1) return prevCards;

      const [movedCard] = newCards.splice(fromIndex, 1);
      newCards.splice(toIndex, 0, movedCard);

      return newCards;
    });
  };

  const handleLayoutChange = (cardId: string, newLayout: CardLayout): void => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === cardId ? { ...card, layout: newLayout } : card
      )
    );
  };

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {cards.map((card, index) => (
        <DraggableCard
          key={card.id}
          id={card.id}
          index={index}
          layout={card.layout}
          onLayoutChange={handleLayoutChange}
          moveCard={moveCard}
        >
          <div className="text-center font-medium h-full flex items-center justify-center">
            {card.content}
          </div>
        </DraggableCard>
      ))}
    </div>
  );
};
