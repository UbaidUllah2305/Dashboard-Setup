export type Credentials = {
  email: string
  password: string
}

export type SessionPayload = {
  accessToken: string
  refreshToken: string
  expiresAt: string
}

export type AuthUser = {
  id: string
  name: string
  email: string
}

export type AuthResponse = {
  user: AuthUser
  session: SessionPayload
}

const wait = (duration = 400) =>
  new Promise((resolve) => setTimeout(resolve, duration))

const FAKE_USER: AuthUser = {
  id: "user-1",
  name: "Avery Baker",
  email: "avery@acme.dev",
}

const randomId = () =>
  globalThis.crypto?.randomUUID?.() ??
  Math.random().toString(36).slice(2, 10) + Math.random().toString(36).slice(2, 10)

const createSession = (): SessionPayload => {
  const expiresAt = new Date(Date.now() + 1000 * 60 * 30)

  return {
    accessToken: randomId(),
    refreshToken: randomId(),
    expiresAt: expiresAt.toISOString(),
  }
}

export async function signIn(credentials: Credentials): Promise<AuthResponse> {
  await wait()

  if (!credentials.email || !credentials.password) {
    throw new Error("Missing credentials")
  }

  if (!credentials.email.endsWith("@acme.dev")) {
    throw new Error("User not found")
  }

  if (credentials.password.length < 4) {
    throw new Error("Password too short")
  }

  return {
    user: FAKE_USER,
    session: createSession(),
  }
}

export async function signOut(): Promise<void> {
  await wait(250)
}

export async function refreshSession(
  refreshToken: string
): Promise<SessionPayload> {
  await wait(350)

  if (!refreshToken) {
    throw new Error("Missing refresh token")
  }

  return createSession()
}
