import Image from "next/image";
import CountdownTimer from "@/components/countdown-timer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ArrowRight,
  CheckCircle2,
  Flame,
  Sparkles,
  Star,
  Timer,
  TrendingUp,
} from "lucide-react";

const painPoints = [
  {
    title: "Peluncuran kurang menggigit",
    description: "Kampanye terasa datar, conversion rate stagnan, dan audiens cepat lupa.",
  },
  {
    title: "Terlalu banyak tools",
    description: "Tim kehilangan fokus karena workflow terpecah dan sulit dieksekusi cepat.",
  },
  {
    title: "Momentum habis di tengah jalan",
    description: "Awal hype tinggi, tapi tidak ada ritme untuk menjaga urgensi.",
  },
];

const solutions = [
  "Template yang siap tancap gas dengan narasi yang terbukti konversi.",
  "Dashboard satu pintu untuk monitor performa pre-order dan follow-up.",
  "Boosting urgency otomatis dengan countdown, badge, dan reminder.",
];

const benefits = [
  { label: "Kenaikan konversi", value: "+38%" },
  { label: "Waktu eksekusi", value: "3x lebih cepat" },
  { label: "Retensi lead", value: "72%" },
  { label: "ROI kampanye", value: "4.6x" },
];

const spotlight = [
  {
    title: "Launch Kit yang langsung siap produksi",
    description:
      "Mulai dari headline sampai CTA, semua disusun untuk membuat audiens segera mengambil tindakan.",
  },
  {
    title: "Panel kontrol urgensi",
    description:
      "Atur batas waktu, promo bundle, dan highlight produk untuk menjaga hype tetap panas.",
  },
  {
    title: "Insight mingguan yang tajam",
    description:
      "Ketahui apa yang bekerja, siapa yang paling aktif, dan kapan harus melakukan push.",
  },
];

const pricing = [
  {
    name: "Basic",
    price: "Rp299K",
    highlight: "Cocok untuk solo founder",
    features: ["1 Launch template", "Checklist eksekusi cepat", "Support email"],
  },
  {
    name: "Bundle",
    price: "Rp599K",
    highlight: "Best value untuk tim kecil",
    features: ["3 Launch template", "Campaign tracker", "Support prioritas"],
  },
  {
    name: "VIP",
    price: "Rp1.299K",
    highlight: "Pendampingan penuh",
    features: ["Semua template", "Audit konversi", "Strategi 1:1"],
  },
];

const reviews = [
  {
    name: "Rania, Founder F&B",
    text: "Launch kami terasa meledak. Landing page ini bantu tim fokus ke closing.",
  },
  {
    name: "Aldo, Product Lead",
    text: "Tone urgent-nya pas. Audience langsung paham value dan cepat checkout.",
  },
  {
    name: "Tasya, Growth Strategist",
    text: "Setup dalam satu malam, hasilnya terasa seperti kampanye besar.",
  },
];

const faqs = [
  {
    question: "Apakah promo ini benar-benar terbatas?",
    answer: "Ya, diskon 30% hanya aktif hingga minggu ini berakhir.",
  },
  {
    question: "Apakah bisa digunakan untuk produk digital maupun fisik?",
    answer: "Bisa. Framework ini fleksibel untuk keduanya, dari pre-order hingga launch cepat.",
  },
  {
    question: "Apakah ada garansi?",
    answer: "Kami berikan garansi 7 hari untuk memastikan Anda puas dengan hasilnya.",
  },
  {
    question: "Berapa lama implementasinya?",
    answer: "Rata-rata 1-2 hari untuk setup awal dan eksekusi pertama.",
  },
  {
    question: "Bisa dipakai tim kecil?",
    answer: "Sangat bisa. Semua workflow dibuat ringkas dan mudah dibagi per role.",
  },
  {
    question: "Apakah ada support setelah pembelian?",
    answer: "Ya, setiap paket mendapat akses support sesuai tingkatnya.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="bg-gradient-to-r from-amber-500/10 via-transparent to-rose-500/10">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-3 text-sm">
          <div className="flex items-center gap-2">
            <Flame className="h-4 w-4 text-amber-400" />
            <span className="font-medium">🔥 Launch Promo: Diskon 30% sampai minggu ini</span>
          </div>
          <Badge className="hidden bg-white/10 text-white sm:inline-flex">Limited</Badge>
        </div>
      </div>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 pb-24 pt-12">
        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-amber-500/20 via-slate-950 to-rose-500/20 p-8 sm:p-12">
          <div className="absolute -left-24 top-8 h-56 w-56 rounded-full bg-amber-400/20 blur-3xl" />
          <div className="absolute -right-16 bottom-0 h-56 w-56 rounded-full bg-rose-400/20 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              <Badge className="w-fit bg-amber-400/20 text-amber-100">Limited Offer</Badge>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                Produk launch yang langsung bikin audiens bilang, “Kapan bisa beli?”
              </h1>
              <p className="max-w-2xl text-base text-slate-200 sm:text-lg">
                Paket lengkap untuk kampanye launch yang agresif, cepat, dan dirancang untuk
                konversi tinggi. Semua elemen urgensi sudah siap pakai.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button size="lg" className="bg-amber-400 text-slate-900 hover:bg-amber-300">
                  Beli Sekarang
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10"
                  asChild
                >
                  <a href="#fitur">Lihat Fitur</a>
                </Button>
              </div>
              <div className="flex flex-wrap gap-3 text-xs text-slate-300">
                <span className="flex items-center gap-2 rounded-full border border-white/10 px-3 py-2">
                  <Sparkles className="h-4 w-4 text-amber-200" />
                  Konversi siap boost
                </span>
                <span className="flex items-center gap-2 rounded-full border border-white/10 px-3 py-2">
                  <Timer className="h-4 w-4 text-amber-200" />
                  Urgensi otomatis
                </span>
                <span className="flex items-center gap-2 rounded-full border border-white/10 px-3 py-2">
                  <TrendingUp className="h-4 w-4 text-amber-200" />
                  Momentum stabil
                </span>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl border border-white/10 bg-slate-900/50 p-4">
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&q=80"
                  alt="Tim launch"
                  width={700}
                  height={520}
                  className="h-full w-full rounded-2xl object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 left-6">
                <CountdownTimer />
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-6">
            <Badge className="w-fit bg-white/10 text-white">Problem</Badge>
            <h2 className="text-3xl font-semibold">Saat launch terasa biasa-biasa saja, peluang ikut pergi.</h2>
            <div className="grid gap-4">
              {painPoints.map((point) => (
                <Card key={point.title} className="border-white/10 bg-slate-900/60">
                  <CardHeader>
                    <CardTitle className="text-lg text-white">{point.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-slate-300">
                    {point.description}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <Badge className="w-fit bg-amber-400/20 text-amber-100">Solution</Badge>
            <h3 className="text-2xl font-semibold">Kami ubah launch menjadi pengalaman yang terasa urgent.</h3>
            <ul className="space-y-4 text-sm text-slate-200">
              {solutions.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-amber-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5">
              <p className="text-sm text-amber-100">
                “Jika kamu hanya punya satu minggu untuk menjual, ini formula yang menyalakan
                urgensi dan konversi.”
              </p>
            </div>
          </div>
        </section>

        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <Card key={benefit.label} className="border-white/10 bg-slate-900/60">
              <CardHeader>
                <CardTitle className="text-3xl font-semibold text-white">{benefit.value}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-300">{benefit.label}</CardContent>
            </Card>
          ))}
        </section>

        <section id="fitur" className="space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <Badge className="w-fit bg-white/10 text-white">Feature Spotlight</Badge>
              <h2 className="mt-3 text-3xl font-semibold">Fitur utama yang bikin launch terasa agresif.</h2>
            </div>
            <Button size="sm" className="hidden bg-amber-400 text-slate-900 hover:bg-amber-300 lg:inline-flex">
              Beli Sekarang
            </Button>
          </div>
          <div className="space-y-6">
            {spotlight.map((item, index) => (
              <Card
                key={item.title}
                className="border-white/10 bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-950"
              >
                <CardContent className="grid gap-6 p-6 md:grid-cols-[1fr_1fr] md:items-center">
                  <div className={index % 2 === 1 ? "md:order-2" : ""}>
                    <h3 className="text-2xl font-semibold">{item.title}</h3>
                    <p className="mt-3 text-sm text-slate-300">{item.description}</p>
                    <div className="mt-4 flex items-center gap-3 text-xs text-slate-400">
                      <span className="rounded-full border border-white/10 px-3 py-1">Mockup</span>
                      <span className="rounded-full border border-white/10 px-3 py-1">Live preview</span>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
                    <div className="space-y-3">
                      <div className="h-2 w-1/3 rounded-full bg-amber-300/70" />
                      <div className="h-2 w-2/3 rounded-full bg-white/20" />
                      <div className="h-2 w-1/2 rounded-full bg-white/20" />
                      <div className="mt-6 h-24 rounded-xl border border-white/10 bg-slate-950/80" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <Badge className="w-fit bg-amber-400/20 text-amber-100">Launch Offer</Badge>
              <h2 className="mt-3 text-3xl font-semibold">Pilih paket, kunci diskon launch.</h2>
            </div>
            <CountdownTimer />
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {pricing.map((tier) => (
              <Card
                key={tier.name}
                className="relative overflow-hidden border-white/10 bg-slate-900/70"
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl text-white">{tier.name}</CardTitle>
                    <Badge className="bg-white/10 text-white">Limited</Badge>
                  </div>
                  <p className="mt-2 text-3xl font-semibold text-white">{tier.price}</p>
                  <p className="text-sm text-slate-300">{tier.highlight}</p>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-slate-300">
                  {tier.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-amber-300" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-amber-400 text-slate-900 hover:bg-amber-300">
                    Beli Sekarang
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div className="space-y-4">
            <Badge className="w-fit bg-white/10 text-white">Reviews</Badge>
            <h2 className="text-3xl font-semibold">Sudah dipakai oleh tim yang ingin launch cepat.</h2>
            <div className="flex items-center gap-2 text-amber-300">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-5 w-5 fill-amber-300" />
              ))}
              <span className="text-sm text-slate-200">4.9/5 dari 128 review</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-300">
              <Input
                className="max-w-xs border-white/20 bg-slate-900/60"
                placeholder="Masukkan email untuk update"
                type="email"
              />
              <Button className="bg-amber-400 text-slate-900 hover:bg-amber-300">
                Ikuti Launch
              </Button>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {reviews.map((review) => (
              <Card key={review.name} className="border-white/10 bg-slate-900/60">
                <CardContent className="space-y-3 p-5">
                  <p className="text-sm text-slate-300">“{review.text}”</p>
                  <p className="text-xs font-semibold text-white">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div>
            <Badge className="w-fit bg-white/10 text-white">Perbandingan</Badge>
            <h2 className="mt-3 text-3xl font-semibold">Produk ini vs cara lama</h2>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-slate-200">Produk Ini</TableHead>
                  <TableHead className="text-slate-200">Cara Lama</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="text-sm text-slate-300">
                <TableRow>
                  <TableCell>CTA jelas, repetitif, dan konsisten.</TableCell>
                  <TableCell>CTA berubah-ubah dan kurang tegas.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Urgensi otomatis dengan countdown & badge.</TableCell>
                  <TableCell>Urgensi manual dan sering terlupakan.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Flow landing page fokus konversi.</TableCell>
                  <TableCell>Konten melebar tanpa prioritas.</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </section>

        <section className="space-y-6">
          <div>
            <Badge className="w-fit bg-white/10 text-white">FAQ</Badge>
            <h2 className="mt-3 text-3xl font-semibold">Pertanyaan yang sering muncul</h2>
          </div>
          <Accordion type="single" collapsible className="rounded-2xl border border-white/10 bg-slate-900/60">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`faq-${index}`} className="border-white/10 px-4">
                <AccordionTrigger className="text-left text-slate-100">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-sm text-slate-300">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </main>

      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/10 bg-slate-950/95 px-4 py-3 backdrop-blur sm:hidden">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-3">
          <div>
            <p className="text-xs text-slate-400">Promo launch tinggal minggu ini</p>
            <p className="text-sm font-semibold text-white">Beli sekarang sebelum habis</p>
          </div>
          <Button size="sm" className="bg-amber-400 text-slate-900 hover:bg-amber-300">
            Beli Sekarang
          </Button>
        </div>
      </div>
    </div>
  );
}
