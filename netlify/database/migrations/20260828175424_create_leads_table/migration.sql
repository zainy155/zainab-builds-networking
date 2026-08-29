CREATE TABLE "leads" (
	"id" serial PRIMARY KEY,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"business_title" text NOT NULL,
	"whatsapp_country_code" text NOT NULL,
	"whatsapp_number" text NOT NULL,
	"created_at" timestamp DEFAULT now()
);
