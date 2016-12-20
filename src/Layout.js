import Inferno from 'inferno';

export default function Layout({ children }) {
  return (
    <div>
      <h1>Hello, world!</h1>
      {children}
    </div>
  );
}
