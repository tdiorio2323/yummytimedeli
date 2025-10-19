import React, { useEffect, useMemo, useState, Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Error Boundary Component
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-black text-zinc-100 flex items-center justify-center">
          <h1 className="text-2xl text-red-500">Something went wrong.</h1>
        </div>
      );
    }
    return this.props.children;
  }
}

/**
 * Yummy Time Deli – Interactive Menu (frontend-only demo)
 * ------------------------------------------------------------------
 * • Add to cart with quantity controls
 * • Optional per-item note (hold Shift on “Add” or click ✎ in cart)
 * • Totals & localStorage persistence
 * • "Checkout" opens a pre-filled email (mailto:) to show the flow
 * ------------------------------------------------------------------
 * Drop-in: this file is self-contained and can be previewed as-is.
 */

import config from "../config.json";

const CURRENCY = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });
const fmt = (n) => CURRENCY.format(n || 0);
const CART_KEY = "ytd_cart_v2";
const STORE_EMAIL = config.store_email;

// Minimal sample data (trimmed from your full menu for brevity).
import MENU from "./data/menu.json";

function useLocalCart() {
  const [cart, setCart] = useState({});
  useEffect(() => {
    try {
      const raw = localStorage.getItem(CART_KEY);
      if (raw) setCart(JSON.parse(raw));
    } catch {}
  }, []);
  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }, [cart]);

  const items = useMemo(() => Object.values(cart), [cart]);
  const subtotal = useMemo(() => items.reduce((s, i) => s + i.price * i.qty, 0), [items]);

  function add(item, qty = 1) {
    const id = `${item.name}__${item.price}`;
    setCart((c) => {
      const next = { ...c };
      if (!next[id]) next[id] = { ...item, id, qty: 0 };
      next[id].qty += qty;
      if (next[id].qty <= 0) delete next[id];
      return next;
    });
  }

  function setNote(id, note) {
    setCart((c) => ({ ...c, [id]: { ...c[id], note } }));
  }

  function clear() {
    setCart({});
  }

  return { cart, items, add, setNote, clear, subtotal };
}

function Section({ section, desc, items, onAdd }) {
  return (
    <div className="bg-white border border-zinc-200 rounded-2xl p-4 space-y-3">
      <div>
        <h3 className="text-xl font-semibold text-primary">{section}</h3>
        {desc && <p className="text-sm text-zinc-500 mt-1">{desc}</p>}
      </div>
      <div className="divide-y divide-zinc-200">
        {items.map((it, i) => (
          <div key={i} className="flex items-center justify-between py-3 gap-3">
            <div>
              <div className="leading-tight text-text">
                {it.name}
                {it.isAddon && <span className="ml-2 text-xs text-accent">Add-on</span>}
              </div>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <div className="tabular-nums text-zinc-500">{fmt(it.price)}</div>
              <button
                className="px-3 py-1.5 rounded-xl border border-secondary bg-secondary text-white hover:bg-secondary/80"
                onClick={(e) => {
                  const item = { name: it.name, price: it.price };
                  if (e.shiftKey) item.note = prompt("Add a note (optional):", "") || "";
                  onAdd(item, 1);
                }}
              >
                Add
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CartDrawer({ open, onClose, items, add, clear, subtotal, setNote }) {
  const mailto = () => {
    const lines = items.map(
      (i) => `• ${i.qty} × ${i.name}${i.note ? ` (note: ${i.note})` : ""} — ${fmt(i.price * i.qty)}`
    );
    const summary = `Yummy Time Deli — Order Preview\n\n${lines.join("\n")}\n\nSubtotal: ${fmt(
      subtotal
    )}\n\n(Example only. Ordering is not live on this page.)`;
    const href = `mailto:${encodeURIComponent(STORE_EMAIL)}?subject=${encodeURIComponent(
      "Yummy Time Deli — Order Preview"
    )}&body=${encodeURIComponent(summary)}`;
    window.location.href = href;
  };

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-zinc-200 bg-white/95 backdrop-blur transition-transform duration-300 ${open ? "translate-y-0" : "translate-y-full"}`}
    >
      <div className="max-w-4xl mx-auto p-4">
        <div className="flex items-center justify-between">
          <strong className="text-lg text-primary">Order Preview</strong>
          <button className="px-2 py-1 rounded-lg border border-zinc-300" onClick={onClose} aria-label="Close">
            ×
          </button>
        </div>

        {!items.length && (
          <div className="text-center text-zinc-500 py-8">Your cart is empty.</div>
        )}

        {!!items.length && (
          <div className="max-h-[40vh] overflow-auto mt-3 space-y-2 pr-1">
            {items.map((it) => (
              <div
                key={it.id}
                className="grid grid-cols-[1fr_auto_auto] items-center gap-3 border border-zinc-200 rounded-xl p-3 bg-zinc-50/60"
              >
                <div className="min-w-0">
                  <div className="truncate text-text">{it.name}</div>
                  <button
                    className="text-xs text-zinc-500 hover:text-zinc-700"
                    onClick={() => setNote(it.id, prompt("Edit note:", it.note || "") || "")}
                  >
                    ✎ {it.note ? it.note : "Add note"}
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <button className="px-2 py-1 rounded-lg border border-zinc-300" onClick={() => add(it, -1)}>
                    −
                  </button>
                  <span className="w-6 text-center tabular-nums text-text">{it.qty}</span>
                  <button className="px-2 py-1 rounded-lg border border-zinc-300" onClick={() => add(it, +1)}>
                    +
                  </button>
                </div>
                <div className="tabular-nums text-text">{fmt(it.price * it.qty)}</div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-3 flex items-center justify-between">
          <div className="text-zinc-500">Subtotal</div>
          <div className="text-lg tabular-nums text-text">{fmt(subtotal)}</div>
        </div>

        <div className="mt-3 flex items-center gap-3">
          <button className="px-3 py-2 rounded-xl border border-zinc-300" onClick={clear} disabled={!items.length}>
            Clear
          </button>
          <button
            className="px-3 py-2 rounded-xl bg-primary text-black border border-black disabled:opacity-50"
            onClick={mailto}
            disabled={!items.length}
          >
            Checkout (Demo)
          </button>
        </div>
      </div>
    </div>
  );
}

import SocialLinks from "./components/SocialLinks.jsx";
import ContactForm from "./components/ContactForm.jsx";
import About from "./pages/About.jsx";

import Footer from "./components/Footer.jsx";

export default function App() {
  const { items, add, setNote, clear, subtotal } = useLocalCart();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return MENU;
    return MENU.map((sec) => ({
      ...sec,
      items: sec.items.filter((i) => `${sec.section} ${i.name}`.toLowerCase().includes(q)),
    })).filter((s) => s.items.length);
  }, [query]);

  const count = useMemo(() => items.reduce((n, i) => n + i.qty, 0), [items]);

  return (
    <Router>
      <ErrorBoundary>
        <div className="min-h-screen bg-background text-text flex flex-col">
          <header className="bg-white shadow-md">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center gap-4">
                  <Link to="/">
                    <img src="/assets/images/yumy.png" alt="Yummy Time Deli Logo" className="h-10 w-auto" />
                  </Link>
                  <div>
                    <h1 className="text-2xl font-bold text-primary"><Link to="/">Yummy Time Deli</Link></h1>
                  </div>
                </div>
                <nav>
                  <ul className="flex items-center gap-8">
                    <li><Link to="/about" className="text-lg font-medium text-text hover:text-primary">About</Link></li>
                    <li>
                      <button
                        className="relative px-4 py-2 rounded-full border border-secondary bg-secondary text-white hover:bg-secondary/80"
                        onClick={() => setOpen(true)}
                      >
                        Cart
                        <span className="ml-2 inline-block min-w-[1.5rem] text-center rounded-full bg-primary text-black px-2">
                          {count}
                        </span>
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </header>

          <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-grow">
            <Routes>
              <Route path="/" element={
                <>
                  <div className="mb-8">
                    <input
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Search menu…"
                      className="w-full px-4 py-3 rounded-2xl bg-white border border-zinc-300 outline-none text-lg"
                    />
                    <p className="text-sm text-zinc-500 mt-2">Tip: Hold <kbd className="px-1 border border-zinc-700 rounded">Shift</kbd> when clicking “Add” to include a note (e.g., “no onions”, “extra sauce”).</p>
                  </div>

                  <div className="grid gap-8">
                    {filtered.map((s, i) => (
                      <Section key={i} {...s} onAdd={add} />
                    ))}
                  </div>
                  <ContactForm />
                </>
              } />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>

          <Footer />

          <CartDrawer open={open} onClose={() => setOpen(false)} items={items} add={add} clear={clear} subtotal={subtotal} setNote={setNote} />
        </div>
      </ErrorBoundary>
    </Router>
  );
}