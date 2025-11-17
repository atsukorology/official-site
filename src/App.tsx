import React, { useState } from 'react';
import MenuBar from './components/MenuBar';
import ImageWithText from './components/ImageWithText';
import TitleBackground from './assets/title-background.png';
import Divider from './components/Divider';
import AtsukoTrim from './assets/atsuko-trim.png';
import InfoPanel from './components/InfoPanel';
import { MeetingIcon, CurrencyIcon, CalendarIcon, PopMeetingIcon, PopCalendarIcon, PopMoneyIcon, PopCurrencyIcon } from './components/Icons';
import SessionCard from './components/SessionCard';
import Button from './components/Button';
import Modal from './components/Modal';

function App() {
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
    <div className="App bg-black text-white">
      <MenuBar />
      <div id="top" className="pt-20"></div>

      <ImageWithText imageUrl={TitleBackground} text="あなたの人生の秘書。" fontSize="4vw" />
      {/* コンテンツを追加 (スクロールできるように高さを設定) */}

      <div className="flex justify-center">

        <div className="max-w-6xl">

          <div className="text-center">
            <h1 className="font-noto text-3xl md:text-4xl lg:text-5xl font-light" style={{ lineHeight: '1.5', letterSpacing: '0.3em', padding: '1em' }}>
              “人生の秘書”
              <br className="md:hidden" />
              としての占い師
            </h1>
          </div>


          <div className="mr-4 ml-4">
            <div className="font-noto font-light text-sm md:text-base lg:text-lg space-y-6" style={{ lineHeight: '1.75', letterSpacing: '0.05em', padding: '1em' }}>
              <p>人生の<strong>専属秘書</strong>として、あなたの“本質”と“今”を導きます。</p>
              <p>人生に<strong>専属の秘書</strong>がいたら、どんなに心強いでしょう。私は、<strong>西洋占星術</strong>と<strong>タロット</strong>を用いて、あなたの「人生の秘書」として寄り添い、より自分らしく生きるためのサポートをいたします。</p>
              <p><strong>西洋占星術</strong>では、生まれた瞬間の星の配置から、あなたが生まれ持った個性や才能、人生のテーマを読み解きます。いわば、あなた専用の“<strong>人生の設計図</strong>”を開くような時間です。</p>
              <p><strong>タロット</strong>では、今抱えている迷いや選択の岐路に対して、「今、何が必要なのか」「どう動くと流れが変わるのか」を具体的にお伝えします。</p>
              <p>将来への不安や、誰にも言えない悩み…。ときには立ち止まり、誰かに頼ることも大切です。そして「特に悩みはないけれど、なんとなく停滞している」という時も。あなたの中に眠る力を引き出し、一歩を踏み出す勇気を取り戻すお手伝いをいたします。</p>
              <p><strong>占い</strong>とは“<strong>うらなり</strong>”――すなわち、裏の成り立ち。出来事の表側だけでなく、その“裏側”にある意味をひも解くことで、あなたが自分らしい人生を選び取っていけるようにサポートいたします。</p>
              <p>星とカードが示すメッセージを通して、あなたの人生がより<strong>Happy</strong>に輝いていきますように。</p>
            </div>
          </div>


          <Divider marginHorizontal={4} />

          <div className="text-center">
            <h1 className="font-noto text-3xl md:text-4xl lg:text-5xl font-light" style={{ lineHeight: '1.5', letterSpacing: '0.3em', paddingTop: '1em', paddingBottom: '1em' }}>
              西洋占星術×タロットで
              <br className="md:hidden" />
              あなたの“見えない裏”を知る
            </h1>
          </div>

          <div className="ml-4 mr-4">
            <div className="font-noto font-light text-sm md:text-base lg:text-lg space-y-6" style={{ lineHeight: '1.75', letterSpacing: '0.05em', padding: '1em' }}>
              <p><strong>西洋占星術</strong>は、4000年以上の歴史を持つ天文学と統計学に基づくビッグデータです。ホロスコープという天体の配置図を用いて、そこから読み取れるあなただけの情報をお伝えします。</p>
              <p>私たちが普段「星占い」で目にする星座は、実は<strong>太陽星座</strong>と呼ばれるものです。これは、生まれた瞬間に太陽が位置していた星座を示しています。</p>
              <p>けれども、私たちの生まれた空には、太陽以外にも月や水星、金星、火星など――さまざまな天体が、それぞれの場所で輝いています。</p>
              <p><strong>ホロスコープ</strong>は、ギリシャ語で時間（ora）と観察者（scopos）。東の地平線から昇ってくる星を観察する、これが由来です。ホロスコープは、あなたが生まれた瞬間の星々の配置を切りとった、あなただけの<strong>天体の配置図</strong>です。生涯変わることはありません。</p>
              <p>西洋占星術では、このホロスコープを読み解くことで、性格や才能、思考の傾向、感情の動き、人間関係のテーマ、そして人生の流れまでも見つめていきます。</p>
              <p>星占いで見ている「一つの星座」は、あなたという宇宙のほんの一部。ホロスコープを読み解くことで、あなたという存在の全体像――“本当の自分”がより立体的に浮かび上がってきます。</p>
              <p><strong>タロットカード</strong>は、「心」の声を聴くためのツールです。選択の迷い、見えない不安、あなたの本心――一枚一枚のカードは、あなた自身も気づいていない<strong>潜在意識</strong>からのメッセージを映し出します。</p>
              <p>それは未来を縛る予言ではなく、あなたがより良い未来を選ぶための<strong>智慧</strong>。あなたの心が本当に望む道を探すお手伝いをいたします。</p>
            </div>
          </div>

          <Divider marginHorizontal={4} />

          <div className="text-center">
            <h2 className="font-noto text-2xl md:text-3xl lg:text-4xl font-light" style={{ lineHeight: '1.5', letterSpacing: '0.3em', paddingTop: '1em' }}>
              Astrologer
            </h2>
            <h2 className="font-noto text-xl md:text-2xl lg:text-3xl font-light" style={{ lineHeight: '1.5', letterSpacing: '0.3em', paddingTop: '1em' }}>
              Atsuko
            </h2>
          </div>

          <div className="flex justify-center m-10">
            <img src={AtsukoTrim} alt="Atsuko" className="max-w-xs w-full h-auto" />
          </div>

          <div className="m-4">
            <p className="font-noto font-light text-sm md:text-base lg:text-lg" style={{ lineHeight: '1.5', letterSpacing: '0.05em', padding: '1em' }}>
              <br />
              元銀行員として、多くのお客様の声に耳を傾け、資産やライフプランの相談を承ってきました。今は大学の秘書として、教授のサポートとたくさんの学生さんの成長を側で見守っています。その経験から、今度はあなたの'人生の秘書'として、占いでそっと あなたに寄り添い、心が軽くなるようなメッセージをお届けしたいと思っています。
              <br />
              あなたの本来と未来を知る西洋占星術と、心の奥の声に耳を傾けるタロットカード。お友達に話すように、安心してセッションにお越しください。あなたのペースに合わせて、一緒に未来への道を探していきましょう。
              <br />
              <br />
              「頑張りたいけど、どうしたらいいかわからない」
              <br />
              「誰かに話を聞いてほしい」
              <br />
              「そっと背中を押してほしい」
              <br />
              「自分の今とこれからを確認したい」
              <br />
              <br />
              そんな時は、私をあなたの'人生の秘書'だと思って、気軽にメッセージを送ってください。
            </p>
          </div>

          <Divider marginHorizontal={4} />

          <div className="m-4">

          </div>

        </div>

      </div>

      <div className="flex justify-center bg-white text-black">

        <div className="max-w-6xl">

          <div className="text-center">
            <h1 className="font-noto text-4xl md:text-5xl lg:text-6xl font-light" style={{ lineHeight: '1.5', letterSpacing: '0.3em', padding: '1em' }}>
              Private Session
            </h1>
          </div>

          <div className="mr-4 ml-4">
            <p className="font-noto font-light text-sm md:text-base lg:text-lg" style={{ lineHeight: '1.5', letterSpacing: '0.2em', padding: '1em' }}>
              ホロスコープを用いたプライベートセッションをオンラインで実施します。
            </p>
          </div>

          <div className="ml-4 mr-4" style={{ padding: '1em' }}>

            <InfoPanel icon={<div style={{ width: '4em' }}>
              <PopMeetingIcon fill="darkslategrey" />
            </div>} title="開催方法" content={
              <div className='text-xs md:text-sm lg:text-base'>
                <p>Google Meetを用いてオンラインで実施します。</p>
                <p>お申し込み後にオンライン会議用のリンクをメールでお送りします。</p>
              </div>
            } />

            <InfoPanel icon={
              <div style={{ width: '4em' }}>
                <PopCalendarIcon fill="darkslategrey" />
              </div>
            } title="開催日時" content={
              <div className='text-xs md:text-sm lg:text-base'>
                <p>①「セッションを予約」ボタンから予約フォームにアクセスし、必要事項を入力して下さい。</p>
                <p>②セッション日時を決定します。</p>
                <p>③セッション前日までにお支払いをお願いします。​</p>
                <p>④セッション当日をお待ちください。</p>
              </div>
            } />

            <InfoPanel icon={<div style={{ width: '4em' }}>
              <PopCurrencyIcon fill="darkslategrey" />
            </div>} title="お支払い方法" content={
              <div className='text-xs md:text-sm lg:text-base'>
                <p>銀行振込</p>
                <p>セッション前日までにお支払いをお願いいたします。</p>
                <p>※振込に係る手数料はお客さまご負担となります。</p>
                <button onClick={handleOpenCancelPolicy} className='text-blue-500 hover:text-blue-700'>
                  <p>キャンセルポリシー</p>
                </button>
              </div>
            } />

            <Modal isOpen={isCancelPolicyModalOpen} onClose={handleCloseCancelPolicy}>
              <div className="text-black">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">キャンセルポリシー</h2>
                <div className="space-y-4 text-sm md:text-base lg:text-lg">
                  <p>※入金後の返金はできません。</p>
                  <p>※ご都合が悪くなってしまった場合は日程変更も可能ですので、お気軽にご相談ください。</p>
                </div>
              </div>
            </Modal>

          </div>

          <div id="session-plans"></div>
          <Divider marginHorizontal={4} color="black" />

          <div className="text-center">
            <h1 className="font-noto text-4xl md:text-5xl lg:text-6xl font-light" style={{ lineHeight: '1.5', letterSpacing: '0.3em', paddingTop: '1em' }}>
              Plans
            </h1>
          </div>

          <div className="m-4">
            <SessionCard title={<>First Session<br className="md:hidden" /> (Long Version)</>} subtitle="約90分 / ￥12,000-" content={
              <div>
                <div className='text-sm md:text-base lg:text-lg'>
                  <p>
                    初めての方に受けて頂けるセッションです。じっくり、たっぷりお話したい方にオススメです。
                    <br />
                    生まれ持った性質、才能、価値観、人間関係、恋愛・結婚観、働き方・適職など、人生をよりハッピーに過ごすために必要な"あなたらしさ"をお伝えします。
                    <br />
                    その上で、人生の現在地と今後の方向性をお伝えし、人生プランのご提案もさせていただきます。
                    <br />
                    母子手帳などに記載の正確な出生時刻がわかる方にオススメです。
                  </p>
                </div>
                <div className="flex justify-center mt-6">
                  <Button
                    normalColor="#2563eb"
                    hoverColor="rgba(255,255,255,1.0)"
                    onClick={() => handleReservation('first-long')}
                  >
                    セッションを予約
                  </Button>
                </div>
              </div>
            } />
          </div>

          <div className="m-4">
            <SessionCard title={<>First Session<br className="md:hidden" /> (Short Version)</>} subtitle="約45分 / ￥5,000-" content={
              <div>
                <div className='text-sm md:text-base lg:text-lg'>
                  <p>初めての方に受けていただくセッションですが、ざっくりと話を聞いてみたい方にオススメです。
                    <br />
                    お伝えする内容は、基本的にLong Versionと同じです。
                    <br />
                    正確な出生時刻がわからない方は、お伝えできる情報に限りがありますので、こちらのプランがオススメです。</p>
                </div>
                <div className="flex justify-center mt-6">
                  <Button
                    normalColor="#2563eb"
                    hoverColor="rgba(255,255,255,1.0)"
                    onClick={() => handleReservation('first-short')}
                  >
                    セッションを予約
                  </Button>
                </div>
              </div>
            } />
          </div>

          <div className="m-4">
            {/*学割セッション*/}
            <SessionCard title="Student Session" subtitle="約30分 / ￥2,000-" content={
              <div>
                <div className='text-sm md:text-base lg:text-lg'>
                  <p>学生さん限定のセッションです。
                    <br />
                    自分の才能は？得意なことは？何が向いている？適職は？友人関係や恋愛観は？など、自己分析したい方にオススメです。普段は大学院の研究室で秘書をしている私です。多くの学生さんと交流してきていますので、どうぞお気軽にお越しください。</p>
                </div>
                <div className="flex justify-center mt-6">
                  <Button
                    normalColor="#2563eb"
                    hoverColor="rgba(255,255,255,1.0)"
                    onClick={() => handleReservation('student')}
                  >
                    セッションを予約
                  </Button>
                </div>
              </div>
            } />
          </div>

          <div className="m-4">
            <SessionCard title="Repeat Session" subtitle="約60分 / ￥8,000-" content={
              <div>
                <div className='text-sm md:text-base lg:text-lg'>
                  <p>First Sessionを受けて頂いた方が対象のセッションです。今、どんな選択をしたらいいの？今年のテーマ、取り組むべき課題は？何を目指したらいい？今後向かうべき方向性は？といった、人生プランをご提案させて頂きます。
                    <br />
                    年に１回、半年に１回など、ご自身のタイミングで定期的に受けて頂くのがオススメです。</p>
                </div>
                <div className="flex justify-center mt-6">
                  <Button
                    normalColor="#2563eb"
                    hoverColor="rgba(255,255,255,1.0)"
                    onClick={() => handleReservation('repeat')}
                  >
                    セッションを予約
                  </Button>
                </div>
              </div>
            } />
          </div>

        </div>
      </div>

    </div >
  );
}

export default App;