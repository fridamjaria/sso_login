import { useSession } from 'next-auth/react';

export default function Dashboard() {
  const { data: session } = useSession();

  return (
    <div>
      {session ? (
        <div>
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Hello, <span className="text-[hsl(280,100%,70%)]">{session.user.name}!</span>
          </h1>
          <br></br>
          <p className="text-2xl tracking-tight text-white sm:text-[2rem]">This is your dashboard.</p>
        </div>
      ) : (
        <div>
          <p className="text-2xl tracking-tight text-white sm:text-[2rem]">You are not logged in.</p>
        </div>
      )}
    </div>
  );
}
