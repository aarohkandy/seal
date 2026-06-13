"use client";

import { useState } from "react";
import Link from "next/link";
import { createSupabaseBrowserClient } from "@/lib/supabase/browser";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { SiteHeader } from "@/components/marketing/site-header";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("Supabase env vars are optional for this local demo.");
  const supabase = createSupabaseBrowserClient();

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!supabase) {
      setMessage("Demo mode: add Supabase env vars to send real magic links. Use the app demo meanwhile.");
      return;
    }
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: `${window.location.origin}/app` }
    });
    setMessage(error ? error.message : "Magic link sent. Check your email.");
  }

  return (
    <>
      <SiteHeader />
      <main className="grid min-h-[calc(100vh-4rem)] place-items-center px-4 py-16">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Sign in to SEAL</CardTitle>
            <p className="text-sm text-slate-600">Email magic links first. Discord OAuth comes later.</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={submit} className="space-y-4">
              <Input
                type="email"
                required
                placeholder="you@example.edu"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <Button type="submit" className="w-full">Send magic link</Button>
            </form>
            <p className="mt-4 text-sm text-slate-600">{message}</p>
            <Button asChild variant="secondary" className="mt-4 w-full">
              <Link href="/app">Open seeded demo</Link>
            </Button>
          </CardContent>
        </Card>
      </main>
    </>
  );
}
