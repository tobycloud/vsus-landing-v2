import React from "react";
import "./plansBox.css";

type PlanType = "Basic" | "Pro" | "God";

interface Props {
  plan?: PlanType;
}

const PlansBox: React.FC<Props> = ({ plan = "Basic" }) => {
  let priceMonthly = "";
  let priceYearly = "";

  switch (plan) {
    case "Pro":
      priceMonthly = "5";
      priceYearly = "55";
      break;
    case "God":
      priceMonthly = "15";
      priceYearly = "165";
      break;
  }

  const color =
    plan === "Basic" ? "white" : plan === "Pro" ? "#673AB7" : "yellow";
  const fontColor = "white";
  const gradientStart =
    plan === "Basic" ? "grey" : plan === "Pro" ? "#311B92" : "#948925";

  return (
    <div
      style={{
        boxShadow: `0 0 12px 1px ${color}`,
      }}
      className="outer"
    >
      <div
        style={{
          color: fontColor,
          border: `2px solid ${color}`,
          backgroundImage: `linear-gradient(to bottom right, ${gradientStart}, #001112)`,
        }}
        className="inner"
      >
        <h1 className="planTitle">{plan}</h1>
        <p className="planName">
          {plan === "Basic"
            ? "The basics to get you started"
            : plan === "Pro"
            ? "For organizations and teams"
            : "For gods and goddesses (for real)"}
        </p>
        <div className="priceHeight">
          {plan !== "Basic" ? (
            <>
              <div style={{ display: "flex", alignItems: "center" }}>
                <span className="priceNormal">$</span>
                <span className="priceNumber">{priceMonthly}</span>
                <span className="priceNormal">/month</span>
              </div>
              <p style={{ fontSize: "20px", margin: "0" }}>or</p>
              <div style={{ display: "flex", alignItems: "center" }}>
                <span className="priceNormal">$</span>
                <span className="priceNumber">{priceYearly}</span>
                <span className="priceNormal">/year</span>
              </div>
            </>
          ) : (
            <span className="priceNumber">Free</span>
          )}
        </div>
        <div>
          <p>{`${plan === "Basic" ? "1" : plan === "Pro" ? "4" : "12"} vCPU${
            plan !== "Basic" ? "s" : ""
          }`}</p>
          <p>{`${plan === "Basic" ? "2" : plan === "Pro" ? "8" : "32"} vRAM${
            plan !== "Basic" ? "s" : ""
          }`}</p>
          <p>{`${
            plan === "Basic" ? "5" : plan === "Pro" ? "20" : "60"
          } Package${plan !== "Basic" ? "s" : ""}`}</p>
          <p>{`${
            plan === "Basic" ? "1" : plan === "Pro" ? "2" : "4"
          } CI/CD Job${plan !== "Basic" ? "s" : ""}`}</p>
        </div>
      </div>
    </div>
  );
};

export default PlansBox;
