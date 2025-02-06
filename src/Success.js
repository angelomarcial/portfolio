import React, { useEffect, useState } from "react";
import { Container, Button, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();
  const [secondsLeft, setSecondsLeft] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);

    const redirectTimer = setTimeout(() => {
      navigate("/");
    }, 3000);

    return () => {
      clearInterval(timer);
      clearTimeout(redirectTimer);
    };
  }, [navigate]);

  return (
    <section className="success-section text-center">
      <Container>
        <h2 className="fw-bold" style={{ color: "#003366" }}>
          Message Sent Successfully!
        </h2>
        <p style={{ color: "#003366", fontSize: "1.2rem" }}>
          Redirecting in {secondsLeft} seconds...
        </p>
        <Spinner animation="border" style={{ color: "#003366" }} />
        <div className="mt-3">
          <Button
            variant="primary"
            style={{ backgroundColor: "#003366", border: "none" }}
            onClick={() => navigate("/")}
          >
            Back to Home Now
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Success;
