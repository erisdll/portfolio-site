import React, { useState, useEffect } from "react";
import clsx from "clsx";

interface NotificationProps {
  message: string;
  type?: "success" | "error" | "info";
  onClose: () => void;
}

export const Notification: React.FC<NotificationProps> = ({ message, type = "info", onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000); // Auto-close after 3 seconds

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={clsx(
        "fixed top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded shadow-lg text-white",
        {
          "bg-green-500": type === "success",
          "bg-red-500": type === "error",
          "bg-blue-500": type === "info",
        }
      )}
    >
      {message}
    </div>
  );
};