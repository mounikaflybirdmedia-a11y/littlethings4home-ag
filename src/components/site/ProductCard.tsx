import { useState } from "react";
import type { Product } from "@/data/products";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ProductCard({ product }: { product: Product }) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", address: "", quantity: 1 });

  const handleOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello Little Things, I want to know about this product!\n\n*New Order!*\n\n*Product:* ${product.name}\n*Price:* ${product.price}\n*Quantity:* ${formData.quantity}\n\n*Customer Details:*\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Address:* ${formData.address}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919959998780?text=${encodedMessage}`, "_blank");
    setOpen(false);
  };

  return (
    <article className="group overflow-hidden rounded-2xl border border-border/60 bg-card shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]">
      <div className="aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={900}
          height={900}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <div className="text-[10px] font-semibold uppercase tracking-wider text-primary">
          {product.category}
        </div>
        <h3 className="mt-1 text-base font-semibold text-foreground">{product.name}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{product.tagline}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-lg font-bold text-foreground">{product.price}</span>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <button className="rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold text-secondary-foreground transition-transform hover:scale-105">
                Order Now
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Order {product.name}</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleOrder} className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <label htmlFor={`name-${product.id}`} className="text-sm font-medium">Full Name</label>
                  <Input id={`name-${product.id}`} required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} placeholder="John Doe" />
                </div>
                <div className="grid gap-2">
                  <label htmlFor={`phone-${product.id}`} className="text-sm font-medium">Phone Number</label>
                  <Input id={`phone-${product.id}`} required type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} placeholder="+91 98765 43210" />
                </div>
                <div className="grid gap-2">
                  <label htmlFor={`address-${product.id}`} className="text-sm font-medium">Delivery Address</label>
                  <Textarea id={`address-${product.id}`} required value={formData.address} onChange={e => setFormData({...formData, address: e.target.value})} placeholder="Enter your full address" />
                </div>
                <div className="grid gap-2">
                  <label htmlFor={`quantity-${product.id}`} className="text-sm font-medium">Quantity</label>
                  <Input id={`quantity-${product.id}`} required type="number" min="1" value={formData.quantity} onChange={e => setFormData({...formData, quantity: parseInt(e.target.value) || 1})} />
                </div>
                <Button type="submit" className="mt-2 w-full">Confirm Order via WhatsApp</Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </article>
  );
}
