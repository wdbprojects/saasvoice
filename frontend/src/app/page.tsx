import DarkMode from "@/components/shared/dark-mode";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-full">
      <h2 className="text-primary text-2xl font-semibold">
        Welcome love and abundance
      </h2>
      <Button variant="default" size="lg">
        Money + LOVE
      </Button>
      <DarkMode />
    </div>
  );
}
