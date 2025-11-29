import Link from "next/link";
import { Zap, Twitter, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export function Footer() {
    return (
        <footer className="bg-background border-t border-border/50 pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="flex flex-col gap-4">
                        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
                            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground">
                                <Zap size={20} fill="currentColor" />
                            </div>
                            <span>Envision</span>
                        </Link>
                        <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                            The all-in-one platform for modern web development. Build faster, scale better, and ship with confidence.
                        </p>
                        <div className="flex gap-4 mt-2">
                            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                                <Twitter size={20} />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                                <Github size={20} />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                                <Linkedin size={20} />
                            </Link>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="flex flex-col gap-4">
                        <h3 className="font-semibold">Product</h3>
                        <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</Link>
                        <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Integrations</Link>
                        <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</Link>
                        <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Changelog</Link>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h3 className="font-semibold">Resources</h3>
                        <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Documentation</Link>
                        <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">API Reference</Link>
                        <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Community</Link>
                        <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Blog</Link>
                    </div>

                    {/* Newsletter Column */}
                    <div className="flex flex-col gap-4">
                        <h3 className="font-semibold">Subscribe</h3>
                        <p className="text-sm text-muted-foreground">
                            Join our newsletter to stay up to date on features and releases.
                        </p>
                        <div className="flex gap-2">
                            <Input placeholder="Enter your email" className="bg-secondary/50 border-border/50" />
                            <Button>Subscribe</Button>
                        </div>
                    </div>
                </div>

                <Separator className="my-8 bg-border/50" />

                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                    <p>© 2024 Envision Inc. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
