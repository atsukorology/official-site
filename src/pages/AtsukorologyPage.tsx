import React, { useState } from 'react';
import MenuBar from '../components/MenuBar';
import ImageWithText from '../components/ImageWithText';
import TitleBackground from '../assets/title-background.png';
import Divider from '../components/Divider';
import AtsukoTrim from '../assets/atsuko-trim.png';
import InfoPanel from '../components/InfoPanel';
import { PopMeetingIcon, PopCalendarIcon, PopCurrencyIcon } from '../components/Icons';
import SessionCard from '../components/SessionCard';
import Button from '../components/Button';
import Modal from '../components/Modal';
import FadeInSection from '../components/FadeInSection';
import AuroraBackground from '../components/AuroraBackground';
import TextReveal from '../components/TextReveal';
import StaggeredList, { StaggeredItem } from '../components/StaggeredList';
import ParallaxElement from '../components/ParallaxElement';

function AtsukorologyPage() {
    const [isCancelPolicyModalOpen, setIsCancelPolicyModalOpen] = useState(false);

    const handleOpenCancelPolicy = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsCancelPolicyModalOpen(true);
    };

    const handleCloseCancelPolicy = () => {
        setIsCancelPolicyModalOpen(false);
    };

    const handleReservation = (sessionType: string) => {
        // 予約フォームのURL（実際のURLに置き換えてください）
        let reservationUrl = '';
        if (sessionType === 'first-long') {
            reservationUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSeHYr9lYbtpr0xBZfa7Lubd6HinhwRsymLVt37t1An-uAiX_A/viewform?usp=pp_url&entry.850193464=First+Session+%EF%BC%88Direction+Book%E4%BB%98%EF%BC%89%EF%BF%A512,000%EF%BC%8F90min.';
        } else if (sessionType === 'first-short') {
            reservationUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSeHYr9lYbtpr0xBZfa7Lubd6HinhwRsymLVt37t1An-uAiX_A/viewform?usp=pp_url&entry.850193464=First+Session+%EF%BF%A55,000%EF%BC%8F45min.';
        } else if (sessionType === 'repeat') {
            reservationUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSeHYr9lYbtpr0xBZfa7Lubd6HinhwRsymLVt37t1An-uAiX_A/viewform?usp=pp_url&entry.850193464=Repeat+Session+%EF%BC%88Direction+Book%E4%BB%98%EF%BC%89%EF%BF%A58,000%EF%BC%8F60min.';
        } else if (sessionType === 'student') {
            reservationUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSeHYr9lYbtpr0xBZfa7Lubd6HinhwRsymLVt37t1An-uAiX_A/viewform?usp=pp_url&entry.850193464=Student+Session%EF%BC%88%E5%AD%A6%E7%94%9F%E3%81%AE%E6%96%B9%E9%99%90%E5%AE%9A%EF%BC%89%EF%BF%A52,000%EF%BC%8F30min.';
        }
        window.open(reservationUrl, '_blank');
    };

    return (
        <div className="bg-slate-950 text-slate-200 selection:bg-blue-500 selection:text-white overflow-x-hidden relative min-h-screen">
            <AuroraBackground />
            <MenuBar />
            <div id="top" className="pt-0"></div>

            <ImageWithText imageUrl={TitleBackground} text="あなたの人生の秘書。" fontSize="4vw" />

            <div className="flex justify-center relative z-10 -mt-20 bg-gradient-to-b from-transparent to-slate-950 pt-32 pb-20">
                <div className="max-w-6xl w-full px-6">

                    <div className="text-center mb-16 flex flex-col items-center">
                        <ParallaxElement offset={-30}>
                            <TextReveal>
                                <h1 className="font-noto text-3xl md:text-4xl lg:text-5xl font-light tracking-widest leading-relaxed text-white drop-shadow-lg text-center">
                                    “人生の秘書”
                                    <br className="md:hidden" />
                                    としての占い師
                                </h1>
                            </TextReveal>
                        </ParallaxElement>
                    </div>

                    <div className="font-noto font-light text-sm md:text-base lg:text-lg space-y-8 leading-loose tracking-wide text-slate-300 max-w-4xl mx-auto">
                        <FadeInSection>
                            <p>人生の<strong className="text-blue-300 font-medium">専属秘書</strong>として、あなたの“本質”と“今”を導きます。</p>
                        </FadeInSection>
                        <FadeInSection>
                            <p>人生に<strong className="text-blue-300 font-medium">専属の秘書</strong>がいたら、どんなに心強いでしょう。私は、<strong className="text-blue-300 font-medium">西洋占星術</strong>と<strong className="text-blue-300 font-medium">タロット</strong>を用いて、あなたの「人生の秘書」として寄り添い、より自分らしく生きるためのサポートをいたします。</p>
                        </FadeInSection>
                        <FadeInSection>
                            <p><strong className="text-blue-300 font-medium">西洋占星術</strong>では、生まれた瞬間の星の配置から、あなたが生まれ持った個性や才能、人生のテーマを読み解きます。いわば、あなた専用の“<strong className="text-blue-300 font-medium">人生の設計図</strong>”を開くような時間です。</p>
                        </FadeInSection>
                        <FadeInSection>
                            <p><strong className="text-blue-300 font-medium">タロット</strong>では、今抱えている迷いや選択の岐路に対して、「今、何が必要なのか」「どう動くと流れが変わるのか」を具体的にお伝えします。</p>
                        </FadeInSection>
                        <FadeInSection>
                            <p>将来への不安や、誰にも言えない悩み…。ときには立ち止まり、誰かに頼ることも大切です。そして「特に悩みはないけれど、なんとなく停滞している」という時も。あなたの中に眠る力を引き出し、一歩を踏み出す勇気を取り戻すお手伝いをいたします。</p>
                        </FadeInSection>
                        <FadeInSection>
                            <p><strong className="text-blue-300 font-medium">占い</strong>とは“<strong className="text-blue-300 font-medium">うらなり</strong>”――すなわち、裏の成り立ち。出来事の表側だけでなく、その“裏側”にある意味をひも解くことで、あなたが自分らしい人生を選び取っていけるようにサポートいたします。</p>
                        </FadeInSection>
                        <FadeInSection>
                            <p>星とカードが示すメッセージを通して、あなたの人生がより<strong className="text-blue-300 font-medium">Happy</strong>に輝いていきますように。</p>
                        </FadeInSection>
                    </div>

                    <div className="my-20">
                        <Divider marginHorizontal={4} color="rgba(148, 163, 184, 0.2)" />
                    </div>

                    <div className="text-center mb-16 flex flex-col items-center">
                        <ParallaxElement offset={-30}>
                            <TextReveal>
                                <h1 className="font-noto text-3xl md:text-4xl lg:text-5xl font-light tracking-widest leading-relaxed text-white text-center">
                                    西洋占星術×タロットで
                                    <br className="md:hidden" />
                                    あなたの“見えない裏”を知る
                                </h1>
                            </TextReveal>
                        </ParallaxElement>
                    </div>

                    <div className="font-noto font-light text-sm md:text-base lg:text-lg space-y-8 leading-loose tracking-wide text-slate-300 max-w-4xl mx-auto">
                        <FadeInSection>
                            <p><strong className="text-blue-300 font-medium">西洋占星術</strong>は、4000年以上の歴史を持つ天文学と統計学に基づくビッグデータです。ホロスコープという天体の配置図を用いて、そこから読み取れるあなただけの情報をお伝えします。</p>
                        </FadeInSection>
                        <FadeInSection>
                            <p>私たちが普段「星占い」で目にする星座は、実は<strong className="text-blue-300 font-medium">太陽星座</strong>と呼ばれるものです。これは、生まれた瞬間に太陽が位置していた星座を示しています。</p>
                        </FadeInSection>
                        <FadeInSection>
                            <p>けれども、私たちの生まれた空には、太陽以外にも月や水星、金星、火星など――さまざまな天体が、それぞれの場所で輝いています。</p>
                        </FadeInSection>
                        <FadeInSection>
                            <p><strong className="text-blue-300 font-medium">ホロスコープ</strong>は、ギリシャ語で時間（ora）と観察者（scopos）。東の地平線から昇ってくる星を観察する、これが由来です。ホロスコープは、あなたが生まれた瞬間の星々の配置を切りとった、あなただけの<strong className="text-blue-300 font-medium">天体の配置図</strong>です。生涯変わることはありません。</p>
                        </FadeInSection>
                        <FadeInSection>
                            <p>西洋占星術では、このホロスコープを読み解くことで、性格や才能、思考の傾向、感情の動き、人間関係のテーマ、そして人生の流れまでも見つめていきます。</p>
                        </FadeInSection>
                        <FadeInSection>
                            <p>星占いで見ている「一つの星座」は、あなたという宇宙のほんの一部。ホロスコープを読み解くことで、あなたという存在の全体像――“本当の自分”がより立体的に浮かび上がってきます。</p>
                        </FadeInSection>
                        <FadeInSection>
                            <p><strong className="text-blue-300 font-medium">タロットカード</strong>は、「心」の声を聴くためのツールです。選択の迷い、見えない不安、あなたの本心――一枚一枚のカードは、あなた自身も気づいていない<strong className="text-blue-300 font-medium">潜在意識</strong>からのメッセージを映し出します。</p>
                        </FadeInSection>
                        <FadeInSection>
                            <p>それは未来を縛る予言ではなく、あなたがより良い未来を選ぶための<strong className="text-blue-300 font-medium">智慧</strong>。あなたの心が本当に望む道を探すお手伝いをいたします。</p>
                        </FadeInSection>
                    </div>

                    <div className="my-20">
                        <Divider marginHorizontal={4} color="rgba(148, 163, 184, 0.2)" />
                    </div>

                    <FadeInSection>
                        <div className="text-center mb-12">
                            <TextReveal width="100%">
                                <h2 className="font-noto text-2xl md:text-3xl lg:text-4xl font-light tracking-[0.3em] text-blue-200 text-center">
                                    Astrologer
                                </h2>
                            </TextReveal>
                            <TextReveal width="100%" delay={0.1}>
                                <h2 className="font-noto text-xl md:text-2xl lg:text-3xl font-light tracking-[0.3em] mt-4 text-white text-center">
                                    Atsuko
                                </h2>
                            </TextReveal>
                        </div>

                        <div className="flex justify-center mb-12">
                            <ParallaxElement offset={50}>
                                <div className="relative">
                                    <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20 rounded-full"></div>
                                    <img src={AtsukoTrim} alt="Atsuko" className="relative max-w-xs w-full h-auto drop-shadow-2xl" />
                                </div>
                            </ParallaxElement>
                        </div>

                        <div className="font-noto font-light text-sm md:text-base lg:text-lg leading-loose tracking-wide text-slate-300 max-w-3xl mx-auto text-center space-y-6">
                            <FadeInSection>
                                <p>
                                    元銀行員として、多くのお客様の声に耳を傾け、資産やライフプランの相談を承ってきました。今は大学の秘書として、教授のサポートとたくさんの学生さんの成長を側で見守っています。その経験から、今度はあなたの'人生の秘書'として、占いでそっと あなたに寄り添い、心が軽くなるようなメッセージをお届けしたいと思っています。
                                </p>
                            </FadeInSection>
                            <FadeInSection>
                                <p>
                                    あなたの本来と未来を知る西洋占星術と、心の奥の声に耳を傾けるタロットカード。お友達に話すように、安心してセッションにお越しください。あなたのペースに合わせて、一緒に未来への道を探していきましょう。
                                </p>
                            </FadeInSection>
                            <FadeInSection>
                                <div className="py-6 text-blue-200 italic">
                                    <p>「頑張りたいけど、どうしたらいいかわからない」</p>
                                    <p>「誰かに話を聞いてほしい」</p>
                                    <p>「そっと背中を押してほしい」</p>
                                    <p>「自分の今とこれからを確認したい」</p>
                                </div>
                            </FadeInSection>
                            <FadeInSection>
                                <p>
                                    そんな時は、私をあなたの'人生の秘書'だと思って、気軽にメッセージを送ってください。
                                </p>
                            </FadeInSection>
                        </div>
                    </FadeInSection>

                    <div className="my-20">
                        <Divider marginHorizontal={4} color="rgba(148, 163, 184, 0.2)" />
                    </div>

                </div>
            </div>

            <div className="flex justify-center bg-white text-slate-800 py-20 relative overflow-hidden">

                <div className="max-w-6xl w-full px-6 relative z-10">

                    <div className="text-center mb-16 flex flex-col items-center">
                        <ParallaxElement offset={-20}>
                            <TextReveal>
                                <h1 className="font-noto text-4xl md:text-5xl lg:text-6xl font-light tracking-[0.2em] text-slate-800 text-center">
                                    Private Session
                                </h1>
                            </TextReveal>
                        </ParallaxElement>
                        <FadeInSection delay={0.3}>
                            <p className="font-noto font-light text-sm md:text-base lg:text-lg tracking-widest mt-8 text-blue-600">
                                ホロスコープを用いたプライベートセッションをオンラインで実施します。
                            </p>
                        </FadeInSection>
                    </div>

                    <StaggeredList className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                        <StaggeredItem>
                            <InfoPanel variant="light" icon={<div style={{ width: '3em' }}>
                                <PopMeetingIcon fill="#475569" />
                            </div>} title="開催方法" content={
                                <div className='text-xs md:text-sm lg:text-base space-y-2'>
                                    <p>Google Meetを用いてオンラインで実施します。</p>
                                    <p>お申し込み後にオンライン会議用のリンクをメールでお送りします。</p>
                                </div>
                            } />
                        </StaggeredItem>

                        <StaggeredItem>
                            <InfoPanel variant="light" icon={
                                <div style={{ width: '3em' }}>
                                    <PopCalendarIcon fill="#475569" />
                                </div>
                            } title="開催日時" content={
                                <div className='text-xs md:text-sm lg:text-base space-y-2'>
                                    <p>①「セッションを予約」ボタンから予約フォームにアクセスし、必要事項を入力して下さい。</p>
                                    <p>②セッション日時を決定します。</p>
                                    <p>③セッション前日までにお支払いをお願いします。​</p>
                                    <p>④セッション当日をお待ちください。</p>
                                </div>
                            } />
                        </StaggeredItem>

                        <StaggeredItem>
                            <InfoPanel variant="light" icon={<div style={{ width: '3em' }}>
                                <PopCurrencyIcon fill="#475569" />
                            </div>} title="お支払い方法" content={
                                <div className='text-xs md:text-sm lg:text-base space-y-2'>
                                    <p>銀行振込</p>
                                    <p>セッション前日までにお支払いをお願いいたします。</p>
                                    <p className="text-slate-500 text-xs">※振込に係る手数料はお客さまご負担となります。</p>
                                    <button onClick={handleOpenCancelPolicy} className='text-blue-600 hover:text-blue-400 transition-colors underline underline-offset-4 mt-2'>
                                        <p>キャンセルポリシー</p>
                                    </button>
                                </div>
                            } />
                        </StaggeredItem>
                    </StaggeredList>

                    <Modal isOpen={isCancelPolicyModalOpen} onClose={handleCloseCancelPolicy}>
                        <div className="text-slate-800">
                            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">キャンセルポリシー</h2>
                            <div className="space-y-4 text-sm md:text-base lg:text-lg">
                                <p>※入金後の返金はできません。</p>
                                <p>※ご都合が悪くなってしまった場合は日程変更も可能ですので、お気軽にご相談ください。</p>
                            </div>
                        </div>
                    </Modal>

                    <div id="session-plans" className="pt-10"></div>
                    <Divider marginHorizontal={4} color="rgba(148, 163, 184, 0.4)" />

                    <div className="text-center my-20 flex flex-col items-center">
                        <ParallaxElement offset={-20}>
                            <TextReveal>
                                <h1 className="font-noto text-4xl md:text-5xl lg:text-6xl font-light tracking-[0.3em] text-slate-800 text-center">
                                    Plans
                                </h1>
                            </TextReveal>
                        </ParallaxElement>
                    </div>

                    <StaggeredList className="space-y-12">
                        <StaggeredItem>
                            <SessionCard variant="light" title={<>First Session<br className="md:hidden" /> (Long Version)</>} subtitle="約90分 / ￥12,000-" content={
                                <div>
                                    <div className='text-sm md:text-base lg:text-lg space-y-4'>
                                        <p>
                                            初めての方に受けて頂けるセッションです。じっくり、たっぷりお話したい方にオススメです。
                                        </p>
                                        <p>
                                            生まれ持った性質、才能、価値観、人間関係、恋愛・結婚観、働き方・適職など、人生をよりハッピーに過ごすために必要な"あなたらしさ"をお伝えします。
                                        </p>
                                        <p>
                                            その上で、人生の現在地と今後の方向性をお伝えし、人生プランのご提案もさせていただきます。
                                        </p>
                                        <p className="text-sm text-slate-500">
                                            ※母子手帳などに記載の正確な出生時刻がわかる方にオススメです。
                                        </p>
                                    </div>
                                    <div className="flex justify-center mt-8">
                                        <Button
                                            normalColor="#3b82f6"
                                            hoverColor="#1e293b"
                                            onClick={() => handleReservation('first-long')}
                                        >
                                            セッションを予約
                                        </Button>
                                    </div>
                                </div>
                            } />
                        </StaggeredItem>

                        <StaggeredItem>
                            <SessionCard variant="light" title={<>First Session<br className="md:hidden" /> (Short Version)</>} subtitle="約45分 / ￥5,000-" content={
                                <div>
                                    <div className='text-sm md:text-base lg:text-lg space-y-4'>
                                        <p>初めての方に受けていただくセッションですが、ざっくりと話を聞いてみたい方にオススメです。</p>
                                        <p>お伝えする内容は、基本的にLong Versionと同じです。</p>
                                        <p className="text-sm text-slate-500">
                                            ※正確な出生時刻がわからない方は、お伝えできる情報に限りがありますので、こちらのプランがオススメです。
                                        </p>
                                    </div>
                                    <div className="flex justify-center mt-8">
                                        <Button
                                            normalColor="#3b82f6"
                                            hoverColor="#1e293b"
                                            onClick={() => handleReservation('first-short')}
                                        >
                                            セッションを予約
                                        </Button>
                                    </div>
                                </div>
                            } />
                        </StaggeredItem>

                        <StaggeredItem>
                            <SessionCard variant="light" title="Student Session" subtitle="約30分 / ￥2,000-" content={
                                <div>
                                    <div className='text-sm md:text-base lg:text-lg space-y-4'>
                                        <p>学生さん限定のセッションです。</p>
                                        <p>自分の才能は？得意なことは？何が向いている？適職は？友人関係や恋愛観は？など、自己分析したい方にオススメです。普段は大学院の研究室で秘書をしている私です。多くの学生さんと交流してきていますので、どうぞお気軽にお越しください。</p>
                                    </div>
                                    <div className="flex justify-center mt-8">
                                        <Button
                                            normalColor="#3b82f6"
                                            hoverColor="#1e293b"
                                            onClick={() => handleReservation('student')}
                                        >
                                            セッションを予約
                                        </Button>
                                    </div>
                                </div>
                            } />
                        </StaggeredItem>

                        <StaggeredItem>
                            <SessionCard variant="light" title="Repeat Session" subtitle="約60分 / ￥8,000-" content={
                                <div>
                                    <div className='text-sm md:text-base lg:text-lg space-y-4'>
                                        <p>First Sessionを受けて頂いた方が対象のセッションです。今、どんな選択をしたらいいの？今年のテーマ、取り組むべき課題は？何を目指したらいい？今後向かうべき方向性は？といった、人生プランをご提案させて頂きます。</p>
                                        <p>年に１回、半年に１回など、ご自身のタイミングで定期的に受けて頂くのがオススメです。</p>
                                    </div>
                                    <div className="flex justify-center mt-8">
                                        <Button
                                            normalColor="#3b82f6"
                                            hoverColor="#1e293b"
                                            onClick={() => handleReservation('repeat')}
                                        >
                                            セッションを予約
                                        </Button>
                                    </div>
                                </div>
                            } />
                        </StaggeredItem>
                    </StaggeredList>

                </div>
            </div>

        </div >
    );
}

export default AtsukorologyPage;
