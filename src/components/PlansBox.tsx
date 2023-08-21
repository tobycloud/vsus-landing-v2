import React from "react";

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
        width: "calc((100vw - 550px) / 3)",
        minWidth: "350px",
        borderRadius: "20px",
        boxShadow: `0 0 12px 1px ${color}`,
        backgroundColor: "#001112",
      }}
    >
      <div
        style={{
          color: fontColor,
          border: `2px solid ${color}`,
          borderRadius: "20px",
          backgroundImage: `linear-gradient(to bottom right, ${gradientStart}, #001112)`,
          padding: "30px",
        }}
      >
        <h1 style={{ fontSize: "40px", fontWeight: "bold" }}>{plan}</h1>
        <p style={{ fontSize: "20px" }}>
          {plan === "Basic"
            ? "The basics to get you started"
            : plan === "Pro"
            ? "For organizations and teams"
            : "For gods and goddesses (for real)"}
        </p>
        <div style={{ height: "200px" }}>
          {plan !== "Basic" ? (
            <>
              <div style={{ display: "flex", alignItems: "center" }}>
                <span style={{ fontSize: "25px" }}>$</span>
                <span style={{ fontSize: "50px", fontWeight: "bold" }}>
                  {priceMonthly}
                </span>
                <span style={{ fontSize: "25px" }}>/month</span>
              </div>
              <p style={{ fontSize: "20px", margin: "0" }}>or</p>
              <div style={{ display: "flex", alignItems: "center" }}>
                <span style={{ fontSize: "25px" }}>$</span>
                <span style={{ fontSize: "50px", fontWeight: "bold" }}>
                  {priceYearly}
                </span>
                <span style={{ fontSize: "25px" }}>/year</span>
              </div>
            </>
          ) : (
            <span style={{ fontSize: "50px", fontWeight: "bold" }}>Free</span>
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
