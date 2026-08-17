/** Cobalt Signal Architecture: the fallback remains navigable and concise rather than breaking the established signal system. */
import { Link } from "wouter";
import { ArrowUpRight } from "lucide-react";
export default function NotFound() { return <div className="grid min-h-[70vh] place-items-center px-5 pt-[74px]"><div className="max-w-lg border-l-2 border-[#185CFF] pl-7"><p className="signal-kicker">Signal not found</p><h1 className="mt-5 text-5xl font-semibold tracking-[-0.07em] text-white">The route has moved.</h1><p className="mt-5 text-base leading-7 text-slate-400">Return to the PorTech index to continue exploring the platform, perspectives, and corporate desk.</p><Link href="/" className="mt-8 flex w-fit items-center gap-2 bg-[#185CFF] px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white">Return home <ArrowUpRight className="h-4 w-4" /></Link></div></div>; }

