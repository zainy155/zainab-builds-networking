import { boolean, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const leads = pgTable("leads", {
  id: serial().primaryKey(),
  name: text().notNull(),
  email: text().notNull(),
  businessTitle: text("business_title").notNull(),
  whatsappCountryCode: text("whatsapp_country_code").notNull(),
  whatsappNumber: text("whatsapp_number").notNull(),
  emailConsent: boolean("email_consent").notNull().default(false),
  whatsappConsent: boolean("whatsapp_consent").notNull().default(false),
  createdAt: timestamp("created_at").defaultNow(),
});
