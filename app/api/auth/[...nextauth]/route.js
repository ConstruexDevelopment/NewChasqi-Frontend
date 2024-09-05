import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/login',  // Página de inicio de sesión
    error: '/auth/error',    // Página de error personalizada
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        tenantId: { label: "tenantId", type: "text", placeholder: "tenantId" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        /*const user ={ id: 1, name: 'Test User', email: 'test@example.com' }; 
        return user;*/
        try {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_DIRECTION_PORT}/tenants/login`,
            {
              method: "POST",
              body: JSON.stringify({
                tenantId: credentials?.tenantId,
                password: credentials?.password,
              }),
              headers: { "Content-Type": "application/json" },
            }
          );
          const user1 = await res.json();
          if (user1.error) {
            throw new Error(user1.error);
          }
          const user = { name: user1.tenantId, email: "miguel@chasqi.io" };
          return user;
        } catch (error) {
          console.error('Error en la autenticación:', error);
          throw new Error('Error en la autenticación');
        }
      }
    }),
  ],
})

export { handler as GET, handler as POST }
