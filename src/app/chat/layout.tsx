import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Chat | Mind Aid",
  description: "Your mental wellness companion",
}

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 