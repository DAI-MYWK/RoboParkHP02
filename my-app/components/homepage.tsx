'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MapPin, Car, Clock, Menu, X, Star, CheckCircle, Cpu, Smile } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function Homepage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [visibleSection, setVisibleSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'features', 'how-it-works', 'user-story', 'pricing', 'faq', 'reviews']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 150 && rect.bottom >= 150
        }
        return false
      })
      if (currentSection) {
        setVisibleSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300">
      <header className="bg-white bg-opacity-90 sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-blue-600">RoboPark</h1>
            <nav className="hidden md:block">
              <ul className="flex space-x-4">
                <li><a href="#features" className={`text-blue-600 hover:text-blue-800 transition-colors ${visibleSection === 'features' ? 'font-bold' : ''}`}>機能</a></li>
                <li><a href="#how-it-works" className={`text-blue-600 hover:text-blue-800 transition-colors ${visibleSection === 'how-it-works' ? 'font-bold' : ''}`}>使い方</a></li>
                <li><a href="#user-story" className={`text-blue-600 hover:text-blue-800 transition-colors ${visibleSection === 'user-story' ? 'font-bold' : ''}`}>ユーザーストーリー</a></li>
                <li><a href="#pricing" className={`text-blue-600 hover:text-blue-800 transition-colors ${visibleSection === 'pricing' ? 'font-bold' : ''}`}>料金</a></li>
                <li><a href="#faq" className={`text-blue-600 hover:text-blue-800 transition-colors ${visibleSection === 'faq' ? 'font-bold' : ''}`}>FAQ</a></li>
                <li><a href="#reviews" className={`text-blue-600 hover:text-blue-800 transition-colors ${visibleSection === 'reviews' ? 'font-bold' : ''}`}>レビュー</a></li>
              </ul>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white hidden md:block">ログイン</Button>
            <Button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden bg-white"
            >
              <ul className="flex flex-col p-4">
                <li><a href="#features" className="block py-2 text-blue-600" onClick={() => setIsMenuOpen(false)}>機能</a></li>
                <li><a href="#how-it-works" className="block py-2 text-blue-600" onClick={() => setIsMenuOpen(false)}>使い方</a></li>
                <li><a href="#user-story" className="block py-2 text-blue-600" onClick={() => setIsMenuOpen(false)}>ユーザーストーリー</a></li>
                <li><a href="#pricing" className="block py-2 text-blue-600" onClick={() => setIsMenuOpen(false)}>料金</a></li>
                <li><a href="#faq" className="block py-2 text-blue-600" onClick={() => setIsMenuOpen(false)}>FAQ</a></li>
                <li><a href="#reviews" className="block py-2 text-blue-600" onClick={() => setIsMenuOpen(false)}>レビュー</a></li>
                <li><Button className="mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white">ログイン</Button></li>
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <main>
        <section id="hero" className="py-20 text-center">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold text-blue-800 mb-4"
            >
              週末のお出かけをもっと快適に
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-blue-600 mb-8"
            >
              ロボットが駐車場を確保！駐車の心配をなくします
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="max-w-md mx-auto"
            >
              <div className="flex">
                <Input type="text" placeholder="目的地を入力" className="rounded-r-none bg-white text-black" aria-label="駐車場を探す場所" />
                <Button className="rounded-l-none bg-blue-600 hover:bg-blue-700 text-white">
                  検索
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="features" className="py-20 bg-white bg-opacity-80">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">RoboParkの特徴</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureCard
                icon={<Cpu className="w-8 h-8 text-blue-600" />}
                title="ロボットによる確実な確保"
                description="予約したスペースは、ロボットが確実に確保。到着までに他の車が占領する心配はありません。"
              />
              <FeatureCard
                icon={<Car className="w-8 h-8 text-blue-600" />}
                title="簡単予約システム"
                description="Webアプリから簡単に駐車スペースを予約。目的地に合わせて最適なスポットを確保できます。"
              />
              <FeatureCard
                icon={<Clock className="w-8 h-8 text-blue-600" />}
                title="時間節約"
                description="駐車場を探す時間を大幅に削減。目的地に到着する前に駐車スペースを確保できます。"
              />
              <FeatureCard
                icon={<Smile className="w-8 h-8 text-blue-600" />}
                title="ストレスフリーな体験"
                description="駐車の心配がなくなり、家族や友人との時間により集中できます。"
              />
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">RoboParkの使い方</h2>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
              <HowItWorksStep
                number={1}
                title="Webアプリで検索"
                description="目的地を入力して、周辺の駐車場を検索。空きスペースがリアルタイムで表示されます。"
              />
              <HowItWorksStep
                number={2}
                title="駐車場を予約"
                description="選んだ駐車スペースをタップして予約。RoboParkのロボットが自動的にその場所を確保します。"
              />
              <HowItWorksStep
                number={3}
                title="駐車場に到着"
                description="予約したスペースに到着すると、ロボットが移動して駐車スペースが空けられています。"
              />
            </div>
          </div>
        </section>

        <section id="user-story" className="py-20 bg-white bg-opacity-80">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">RoboParkで変わる日曜日</h2>
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute left-8 top-0 h-full w-1 bg-blue-200 rounded"></div>
                <StoryStep
                  icon={<Clock className="w-8 h-8 text-blue-600" />}
                  title="朝8時、家族での動物園デー"
                  description="お父さんは、日曜日の動物園の駐車場が混雑することを心配していました。子どもたちは楽しみにしているのに、駐車場探しで時間を無駄にしたくありません。"
                />
                <StoryStep
                  icon={<MapPin className="w-8 h-8 text-blue-600" />}
                  title="8時30分、RoboParkを起動"
                  description="朝食後、お父さんはRoboParkのWebアプリを開きます。動物園周辺の駐車場情報がリアルタイムで表示されます。"
                />
                <StoryStep
                  icon={<Car className="w-8 h-8 text-blue-600" />}
                  title="8時45分、最適な駐車場を予約"
                  description="アプリが最寄りの空き駐車場を提案。料金と距離を考慮し、お父さんは最適な選択肢を見つけ、予約します。"
                />
                <StoryStep
                  icon={<Cpu className="w-8 h-8 text-blue-600" />}
                  title="9時30分、ロボットが駐車スペースを確保"
                  description="予約が確定すると、RoboParkの小型ロボットが自動で動き出し、指定された駐車スペースに赤い三角のカラーコーンを置いて場所を確保します。"
                />
                <StoryStep
                  icon={<CheckCircle className="w-8 h-8 text-blue-600" />}
                  title="10時、スムーズに駐車完了"
                  description="動物園に到着すると、予約した駐車スペースにロボットが待機しています。ロボットが自動的に移動し、スムーズに駐車できました。"
                />
                <StoryStep
                  icon={<Star className="w-8 h-8 text-blue-600" />}
                  title="17時、充実した一日の終わり"
                  description="駐車の心配なく楽しい一日を過ごせました。家族全員が、スムーズな駐車体験に大満足です。"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="py-20 bg-white bg-opacity-80">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">料金プラン</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <PricingCard
                title="ベーシック"
                price="¥0"
                features={[
                  "リアルタイム空き情報",
                  "基本的な予約機能",
                  "月3回まで利用可能"
                ]}
              />
              <PricingCard
                title="スタンダード"
                price="¥980"
                features={[
                  "リアルタイム空き情報",
                  "無制限の予約機能",
                  "ロボットによる確実な確保",
                  "優先予約枠"
                ]}
                highlighted={true}
              />
              <PricingCard
                title="プレミアム"
                price="¥1,980"
                features={[
                  "スタンダードの全機能",
                  "VIP駐車スペース",
                  
                  "24時間カスタマーサポート",
                  "駐車料金の割引"
                ]}
              />
            </div>
          </div>
        </section>

        <section id="faq" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">よくある質問</h2>
            <Accordion type="single" collapsible className="max-w-2xl mx-auto">
              <AccordionItem value="item-1">
                <AccordionTrigger>RoboParkはどのように機能しますか？</AccordionTrigger>
                <AccordionContent>
                  RoboParkは、小型ロボットと高度なアルゴリズムを使用して、リアルタイムで駐車場の空き状況を管理します。ユーザーがWebアプリで予約すると、ロボットが指定された駐車スペースを確保します。
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>予約をキャンセルすることはできますか？</AccordionTrigger>
                <AccordionContent>
                  はい、予約時間の1時間前までであれば、アプリ内でキャンセルすることができます。それ以降のキャンセルには、キャンセル料が発生する場合があります。
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>対応している駐車場はどこですか？</AccordionTrigger>
                <AccordionContent>
                  現在、東京、大阪、名古屋、福岡、札幌の主要都市の大型商業施設や観光地の駐車場で利用可能です。順次、対応エリアを拡大していく予定です。
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>ロボットは安全ですか？</AccordionTrigger>
                <AccordionContent>
                  はい、RoboParkのロボットは高度なセンサーと安全機能を搭載しており、人や車両を検知して衝突を回避します。また、定期的な保守点検も行っているので、安心してご利用いただけます。
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        <section id="reviews" className="py-20 bg-white bg-opacity-80">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">お客様の声</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ReviewCard
                name="田中さん"
                rating={5}
                comment="RoboParkのおかげで、家族との外出が本当に楽になりました。駐車場の心配がなくなり、子供たちともっと楽しい時間を過ごせています。"
              />
              <ReviewCard
                name="佐藤さん"
                rating={4}
                comment="使いやすいアプリで、予約も簡単です。ロボットが駐車スペースを確保してくれるのは、とても便利ですね。たまに混雑時に予約が取りづらいことがありますが、概ね満足しています。"
              />
              <ReviewCard
                name="鈴木さん"
                rating={5}
                comment="プレミアムプランを利用していますが、VIP駐車スペースが本当に便利です。週末のショッピングモールでも、いつもスムーズに駐車できて助かっています。"
              />
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-blue-800 mb-8">RoboParkを今すぐ体験</h2>
            <p className="text-xl text-blue-600 mb-8">ストレスフリーな駐車で、あなたの大切な時間を守ります</p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-3 rounded-full shadow-lg transition-transform hover:scale-105">
              無料で始める
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-blue-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">RoboPark</h3>
              <p>ロボットを活用した次世代の駐車場管理サービス</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">リンク</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-300 transition-colors">会社概要</a></li>
                <li><a href="#" className="hover:text-blue-300 transition-colors">プライバシーポリシー</a></li>
                <li><a href="#" className="hover:text-blue-300 transition-colors">利用規約</a></li>
                <li><a href="#" className="hover:text-blue-300 transition-colors">お問い合わせ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">フォローする</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-blue-300 transition-colors" aria-label="Twitter">
                  <TwitterIcon className="h-6 w-6" />
                </a>
                <a href="#" className="hover:text-blue-300 transition-colors" aria-label="Facebook">
                  <FacebookIcon className="h-6 w-6" />
                </a>
                <a href="#" className="hover:text-blue-300 transition-colors" aria-label="Instagram">
                  <InstagramIcon className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2024 RoboPark. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="flex items-center text-blue-600">
          {icon}
          <span className="ml-2">{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>{description}</CardContent>
    </Card>
  )
}

function HowItWorksStep({ number, title, description }: { number: number; title: string; description: string }) {
  return (
    <div className="w-full md:w-1/3 text-center">
      <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
        <span className="text-3xl font-bold text-blue-600">{number}</span>
      </div>
      <h3 className="text-xl font-semibold text-blue-700 mb-2">{title}</h3>
      <p className="text-blue-600">{description}</p>
    </div>
  )
}

function StoryStep({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="mb-8 flex">
      <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center z-10">
        {icon}
      </div>
      <div className="flex-grow pl-8 pt-2">
        <h3 className="text-xl font-semibold text-blue-700 mb-2">{title}</h3>
        <p className="text-blue-600">{description}</p>
      </div>
    </div>
  )
}

function PricingCard({ title, price, features, highlighted = false }: { title: string; price: string; features: string[]; highlighted?: boolean }) {
  return (
    <Card className={`flex flex-col ${highlighted ? 'border-blue-500 border-2' : ''}`}>
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-blue-600">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-4xl font-bold text-blue-800 mb-4">{price} <span className="text-sm font-normal">/月</span></p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <CheckIcon className="text-green-500 mr-2" />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
      <div className="p-4">
        <Button className={`w-full ${highlighted ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white`}>
          選択する
        </Button>
      </div>
    </Card>
  )
}

function ReviewCard({ name, rating, comment }: { name: string; rating: number; comment: string }) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl mr-4">
            {name[0]}
          </div>
          <div>
            <h3 className="font-semibold text-blue-800">{name}</h3>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
              ))}
            </div>
          </div>
        </div>
        <p className="text-blue-600">{comment}</p>
      </CardContent>
    </Card>
  )
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}