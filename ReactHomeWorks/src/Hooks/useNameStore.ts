import {create} from "zustand/react";
import {createJSONStorage, persist} from "zustand/middleware";

interface state {
    name: string | null;
}

interface action {
    setName(name: string | null): void;
}

interface NameStore extends state, action {
}

const initialState = "";


const useNameStore = create<NameStore>()(persist(
    (set) => ({
        name: initialState,
        setName: (name: string) => set({name: name}),
    }), {
        name: "nameStore",
        storage: createJSONStorage(() => sessionStorage),
    }))
export default useNameStore;