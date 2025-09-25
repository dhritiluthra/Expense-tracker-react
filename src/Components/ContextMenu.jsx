import React from "react";

export default function ContextMenu({
  contextPosition,
  setContMenuStyle,
  rowId,
  setExpenses,
  setNewExpense,
  expenses,
  setEditingRowId,
}) {
  const handleEditDelete = (e) => {
    setContMenuStyle((prevState) => {
      return { ...prevState, display: "none" };
    });
  };
  const handleEdit = (e) => {
    const expToBeEdited = expenses.find((exp) => {
      return exp.id === rowId;
    });
    if (expToBeEdited) {
      setNewExpense({
        id:expToBeEdited.id,
        title: expToBeEdited.title,
        category: expToBeEdited.category,
        amount: expToBeEdited.amount,
      });
      setEditingRowId(rowId);
    }
  };
  const handleDelete = (e) => {
    setExpenses((prevState) => {
      return prevState.filter((obj) => obj.id != rowId);
    });
  };

  return (
    <div
      className="context-menu"
      style={{
        left: contextPosition?.left,
        top: contextPosition?.top,
        display: contextPosition?.display,
      }}
    >
      <div
        onClick={(e) => {
          handleEditDelete(e);
          handleEdit(e);
        }}
      >
        Edit
      </div>
      <div
        onClick={(e) => {
          handleEditDelete(e);
          handleDelete(e);
        }}
      >
        Delete
      </div>
    </div>
  );
}
