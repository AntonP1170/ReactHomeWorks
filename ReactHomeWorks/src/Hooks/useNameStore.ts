import {create} from "zustand/react";

interface state {
    name: string | null;
}

interface action {
    setName(name: string | null): void;
}

interface NameStore extends state, action {
}

const initialState = "";


const useNameStore = create<NameStore>()((set) => ({
    name: initialState,
    setName: (name: string) => set({name: name}),
}))
export default useNameStore;