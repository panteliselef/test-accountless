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
    <ClerkProvider clerkJSVersion="5.33.0-snapshot.v5b320b96b95e4b7174c14c4abc2326f0a8efa69f">
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
