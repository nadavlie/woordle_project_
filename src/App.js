import KeyBoard from "./components/KeyBoard";

export default function App() {
  // main sending properties for keyboard!
  const QWERTY = "QWERTYUIOPASDFGHJKLZXCVBNM".split("");

  return (
    <div>
      <KeyBoard QWERTY={QWERTY} />;
    </div>
  );
}
