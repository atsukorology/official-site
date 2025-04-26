import React from 'react';
import MenuBar from './components/MenuBar';
import ImageWithText from './components/ImageWithText';
import TitleBackground from './assets/title-background.jpg';
import Divider from './components/Divider';
import CircleImage from './components/CircleImage';
import AstrologerImage from './assets/astrologer.jpeg';
import InfoPanel from './components/InfoPanel';
import { MeetingIcon, CurrencyIcon, CalendarIcon } from './components/Icons';
import SessionCard from './components/SessionCard';
import Button from './components/Button';
function App() {
  return (
    <div className="App bg-black text-white">
      <MenuBar />
      <ImageWithText imageUrl={TitleBackground} text="あなたの人生の秘書。" fontSize="4vw" />
      {/* コンテンツを追加 (スクロールできるように高さを設定) */}

      <div className="flex justify-center">

        <div className="max-w-4xl">

          <div className="text-center">
            <h1 className="font-noto text-4xl font-light" style={{ lineHeight: '1.5', letterSpacing: '0.3em', marginRight: '-0.5em', padding: '1em' }}>
              “人生の秘書”としての
              <br />
              占い師
            </h1>
          </div>


          <div className="mr-10 ml-10">
            <p className="font-noto font-light" style={{ lineHeight: '1.5', letterSpacing: '0.2em', marginRight: '-0.5em', padding: '1em' }}>
              将来への不安、誰にも言えない悩み…時には立ち止まって、誰かに頼ることも大切です。私があなたの人生の秘書としてそっと支え、一歩踏み出す勇気を応援します。
              <br />
              特に悩みはないけれど、停滞感を打破したい、新しい可能性を見つけたい…そんなあなたの可能性を最大限に引き出すお手伝いを致します。
              <br />
              あなたの人生の秘書として、あなたの本質を伝え、より自分らしい生き方へサポートさせていただきます。
              <br />
              <br />
              元銀行営業として、多くのお客様の声に耳を傾け、資産やライフプランの相談を承ってきました。今は大学の秘書として、教授のサポートとたくさんの学生さんの成長を側で見守っています。その経験から、今度はあなたの『人生の秘書』として、占いでそっと あなたに寄り添い、心が軽くなるようなメッセージをお届けしたいと思っています。
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
              そんな時は、私をあなたの『人生の秘書』だと思って、気軽にメッセージを送ってください。
            </p>
          </div>


          <Divider marginHorizontal={10} />

          <div className="text-center">
            <h3 className="font-noto text-xl font-light" style={{ lineHeight: '1.5', letterSpacing: '0.3em', marginRight: '-0.5em', paddingTop: '1em' }}>
              95%の
              <br />
              “見えない世界”
              <br />
              を明かす
            </h3>
            <h1 className="font-noto text-4xl font-light" style={{ lineHeight: '1.5', letterSpacing: '0.3em', marginRight: '-0.5em', paddingBottom: '1em' }}>
              あなたの本来を知る
              <br />
              プライベート
              <br />
              セッション
            </h1>
          </div>

          <div className="ml-10 mr-10">
            <p className="font-noto font-light" style={{ lineHeight: '1.5', letterSpacing: '0.2em', marginRight: '-0.5em', padding: '1em' }}>
              西洋占星術は、4000年以上の歴史を持つ天文学と統計学に基づくビッグデータです。ホロスコープという天体の配置図を用いて、そこから読み取れるあなたの情報をお伝えします。
              <br />
              <br />
              占いとはうらなり、すなわち、裏の成り立ちです。エンターテイメントではない、あなた自身とあなたの人生の裏の成り立ちをお伝えし、あなたらしく生きるサポートをします。
            </p>
          </div>

          <Divider marginHorizontal={10} />

          <div className="text-center">
            <h2 className="font-noto text-2xl font-light" style={{ lineHeight: '1.5', letterSpacing: '0.3em', marginRight: '-0.5em', paddingTop: '1em' }}>
              Astrologer
            </h2>
            <h2 className="font-noto text-xl font-light" style={{ lineHeight: '1.5', letterSpacing: '0.3em', marginRight: '-0.5em', paddingTop: '1em' }}>
              Atsuko
            </h2>
          </div>

          <div className="flex justify-center m-10">
            <CircleImage imageUrl={AstrologerImage} size="w-48 h-48" />
          </div>

          <div className="mr-10 ml-10">
            <p className="font-noto font-light" style={{ lineHeight: '1.5', letterSpacing: '0.2em', marginRight: '-0.5em', padding: '1em' }}>
              1985年、千葉県生まれ。2人の娘の母。
            </p>
          </div>

          <Divider marginHorizontal={10} />

          <div className="m-10">

          </div>

        </div>

      </div>

      <div className="flex justify-center bg-white text-black">

        <div className="max-w-4xl">

          <div className="text-center">
            <h1 className="font-noto text-4xl font-light" style={{ lineHeight: '1.5', letterSpacing: '0.3em', marginRight: '-0.5em', padding: '1em' }}>
              Private Session
            </h1>
          </div>

          <div className="mr-10 ml-10">
            <p className="font-noto font-light" style={{ lineHeight: '1.5', letterSpacing: '0.2em', marginRight: '-0.5em', padding: '1em' }}>
              ホロスコープを用いたプライベートセッションをオンラインで実施します。
            </p>
          </div>

          <div className="ml-20 mr-20">

            <InfoPanel icon={<MeetingIcon width="7em" height="7em" />} title="開催方法" content={
              <div>
                <p>Google Meetを用いてオンラインで実施します。</p>
                <p>お申し込み後にオンライン会議用のリンクをメールでお送りします。</p>
              </div>
            } />

            <InfoPanel icon={
              <div style={{ width: '7em', height: '7em', padding: '1.5em' }}>
                <CalendarIcon />
              </div>
            } title="開催日時" content={
              <div>
                <p>①「セッションを予約」ボタンから予約フォームにアクセスし、必要事項を入力して下さい。</p>
                <p>②セッション日時を決定いたします。</p>
                <p>③セッション前日までにお支払いをお願いいたします。​</p>
                <p>④セッション当日をお待ちください。</p>
              </div>
            } />

            <InfoPanel icon={<div style={{ width: '7em', height: '7em', padding: '1.5em' }}>
              <CurrencyIcon />
            </div>} title="お支払い方法" content={
              <div>
                <p>銀行振込</p>
                <p>セッション前日までにお支払いをお願いいたします。</p>
                <p>※振込に係る手数料はお客さまご負担となります。</p>
                <a href='https://www.google.com' className='text-blue-500'>
                  <p>キャンセルポリシー</p>
                </a>
              </div>
            } />

          </div>

          <Divider marginHorizontal={10} color="black" />

          <div className="text-center">
            <h1 className="font-noto text-4xl font-light" style={{ lineHeight: '1.5', letterSpacing: '0.3em', marginRight: '-0.5em', padding: '1em' }}>
              Plans
            </h1>
          </div>

          <div className="m-10">
            <SessionCard title="First Session" subtitle="約90分 / ￥12,000" content={
              <div>
                <div>
                  <p>初めてご希望の方に、最初に受けていただくセッションです。</p>
                  <p>あなたの生年月日・出生時間から作成したホロスコープに基づき、
                    あなたの性格や運命を知ることができます。</p>
                  <p>また、あなたの人生の秘書として、
                    あなたの人生の方向性をお伝えします。</p>
                </div>
                <div className="flex justify-center mt-10">
                  <Button normalColor="#2563eb" hoverColor="rgba(255,255,255,1.0)">セッションを予約</Button>
                </div>
              </div>
            } />
          </div>

          <div className="m-10">
            <SessionCard title="Repeat Session" subtitle="約90分 / ￥12,000" content={
              <div>
                <div>
                  <p>一度セッションを受けた方を対象に、継続して受けていただくセッションです。</p>
                  <p>前回のセッションから、あなたのホロスコープを更新していただき、
                    あなたの人生の方向性をお伝えします。</p>
                </div>
                <div className="flex justify-center mt-10">
                  <Button normalColor="#2563eb" hoverColor="rgba(255,255,255,1.0)">セッションを予約</Button>
                </div>
              </div>
            } />
          </div>

          <div className="m-10">
            {/*学割セッション*/}
            <SessionCard title="Student Session" subtitle="約90分 / ￥12,000" content={
              <div>
                <div>
                  <p>一度セッションを受けた方を対象に、継続して受けていただくセッションです。</p>
                  <p>前回のセッションから、あなたのホロスコープを更新していただき、
                    あなたの人生の方向性をお伝えします。</p>
                </div>
                <div className="flex justify-center mt-10">
                  <Button normalColor="#2563eb" hoverColor="rgba(255,255,255,1.0)">セッションを予約</Button>
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