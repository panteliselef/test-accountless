import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

import {
  auth
} from "@clerk/nextjs/server";

import "./globals.css";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await auth()
  return (
    <ClerkProvider clerkJSVersion="5.35.0-snapshot.vedeeafdd7381a6d669d883c9837546d137f9c350">
      <html lang="en">
        <body>
          <header>
            <SignedOut>
              <SignInButton />
            </SignedOut>

            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>

          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
