type Environments = "production" | "staging" | "development";

const environments: Environments[] = ["production", "staging", "development"];

if (!environments.includes(process.env.NODE_ENV as Environments)) {
	throw new Error("Invalid NODE_ENV");
}

export const environment: Environments = (process.env.NODE_ENV as Environments) || "development";
