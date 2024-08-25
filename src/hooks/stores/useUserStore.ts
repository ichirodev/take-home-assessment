'use client'

import { User } from "@/models/user";
import { create } from "zustand";

const user: User = {
    id: Number(process.env.NEXT_PUBLIC_DEMO_USER_ID),
    name: process.env.NEXT_PUBLIC_DEMO_USER_NAME!,
    email: process.env.NEXT_PUBLIC_DEMO_USER_EMAIL!
}
const useUserStore = create((set) => ({
    user: user,
    setUser: (newUser: User) => set({ user: newUser }),
    clearUser: () => set({ user: null })
}));

export default useUserStore;
