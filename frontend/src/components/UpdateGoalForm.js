import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import "./UpdateGoalForm.css";
import { getSingleGoal, updateGoal } from "../features/goals/goalSlice";

const UpdateGoalForm = () => {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  let { id } = useParams();

  const singleGoal = async () => {
    await dispatch(getSingleGoal(id));
  };

  useEffect(() => {
    singleGoal();
  }, [id]);

  const { goal } = useSelector((state) => state.goals);

  //
  // path="/"
  const onSubmit = (e) => {
    e.preventDefault();
    let str = text.trim();
    let goalData = { text: str, id: id };
    dispatch(updateGoal(goalData));
    setText("");
  };

  return (
    <section className="updateform">
      <h2>update Goal</h2>
      <form onSubmit={onSubmit}>
        <div
          className="form-group"
          style={{
            alignItems: "start",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <label htmlFor="text">Goal</label>
          <input
            type="text"
            name="text"
            id="text"
            value={text}
            placeholder={goal?.text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div
          className="form-group"
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <button className="btn update_goal_btn" type="submit">
            {" "}
            update Goal
          </button>
          <button className="btn update_goal_btn" onClick={() => navigate("/")}>
            {" "}
            dashboard
          </button>
        </div>
      </form>
    </section>
  );
};

export default UpdateGoalForm;
