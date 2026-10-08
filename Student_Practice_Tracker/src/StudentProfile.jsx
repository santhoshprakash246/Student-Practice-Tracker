import { useEffect } from "react";

function StudentProfile(props) {
  useEffect(() => {
    const previousTitle = document.title;

    document.title = `Practice Sessions: ${props.practiceCount}`;

    return () => {
      document.title = previousTitle;
    };
  }, [props.practiceCount]);

  return (
    <div className="student-profile">
      <h2>Student Profile</h2>

      <p>
        <strong>Name:</strong> {props.name}
      </p>

      <p>
        <strong>Department:</strong> {props.department}
      </p>

      <p>
        <strong>Year:</strong> {props.year}
      </p>

      <p>
        <strong>Practice Sessions:</strong> {props.practiceCount}
      </p>

      <button onClick={() => props.setPracticeCount((prev) => prev + 1)}>
        Complete Practice
      </button>

      <button onClick={() => props.setPracticeCount(0)}>
        Reset
      </button>
    </div>
  );
}

export default StudentProfile;