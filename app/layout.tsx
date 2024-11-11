import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider clerkJSVersion="5.33.0-snapshot.v6f268a33cd5361e78cafcc3cfaa30c8fb73cf4f5">
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
