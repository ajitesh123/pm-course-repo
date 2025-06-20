# Clerk Authentication Setup

This project uses [Clerk](https://clerk.dev/) for authentication. Follow these instructions to set up Clerk in your own deployment.

## Step 1: Create a Clerk Account

1. Go to [https://clerk.dev/](https://clerk.dev/) and sign up for an account
2. Create a new application in the Clerk dashboard
3. Configure your authentication methods (Email/Password, OAuth providers, etc.)

## Step 2: Get Your API Keys

1. In your Clerk dashboard, go to the "API Keys" section
2. Copy your `Publishable Key` and `Secret Key`

## Step 3: Configure Environment Variables

1. Update the `.env` file with your own keys:

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key_here
CLERK_SECRET_KEY=your_secret_key_here

# These URLs are already configured in the project, but you can modify them if needed
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
```

## Step 4: Test Authentication

1. Run the development server: `npm run dev`
2. Visit your app at [http://localhost:3000](http://localhost:3000)
3. Click the "Sign In" button in the header
4. Test both sign-in and sign-up flows

## Implementation Details

The Clerk integration includes:

1. **Middleware Configuration**: `middleware.ts` at the root directory handles authentication routes
2. **ClerkProvider**: Added to `app/layout.tsx` to provide authentication context
3. **Authentication UI**:
   - Sign In button in the header
   - Sign In page at `/sign-in/[[...sign-in]]/page.tsx`
   - Sign Up page at `/sign-up/[[...sign-up]]/page.tsx`
4. **Authentication Components**:
   - `<SignedIn>`: Render content only for authenticated users
   - `<SignedOut>`: Render content only for unauthenticated users
   - `<UserButton>`: Shows the current user's avatar and dropdown menu

## Protecting Routes

To protect routes that require authentication, you can use Clerk's helpers:

```typescript
// In server components:
import { auth } from "@clerk/nextjs/server";

export default function ProtectedPage() {
  const { userId } = auth();
  
  if (!userId) {
    // Handle unauthenticated state, e.g., redirect to sign-in
    redirect("/sign-in");
  }
  
  // Render protected content
}

// In client components:
import { useAuth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default function ProtectedClientComponent() {
  const { isLoaded, userId } = useAuth();
  
  if (isLoaded && !userId) {
    redirect("/sign-in");
  }
  
  // Render protected content
}
```

## User Data Access

Access user data in your components:

```typescript
// Server components
import { auth, currentUser } from "@clerk/nextjs/server";

export default async function ProfilePage() {
  const { userId } = auth();
  const user = await currentUser();
  
  return <div>Hello, {user?.firstName}!</div>;
}

// Client components
import { useUser } from "@clerk/nextjs";

export default function ProfileClient() {
  const { isLoaded, user } = useUser();
  
  if (!isLoaded) return <div>Loading...</div>;
  
  return <div>Hello, {user?.firstName}!</div>;
}
```

## Additional Resources

- [Clerk Documentation](https://clerk.dev/docs)
- [Next.js + Clerk Integration Guide](https://clerk.dev/docs/nextjs/get-started-with-nextjs)
- [Customizing Clerk Components](https://clerk.dev/docs/customization/overview) 