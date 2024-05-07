"use client";

enum Device {
  MOBILE = "MOBILE",
  DESKTOP = "DESKTOP",
}

enum TopicSectionEnum {
  TOKENOMICS = "TOKENOMICS",
  TRADE = "TRADE",
  STAKE = "STAKE",
  CONTRIBUTE = "CONTRIBUTE",
}

interface TopicSectionProps {
  backgroundColor: string;
  title: string;
  body?: JSX.Element;
  imageUrl: string;
  buttonText: string;
  buttonUrl: string;
  reversed: boolean;
}

// Define a shared variable for container dimensions and padding to ensure
// consistency across sections with full-width backgrounds.
const containerWidthAndPadding = "w-[1200px] max-w-[100vw] m-auto p-8 ";

function getTopicSectionBody(topicSection: TopicSectionEnum): JSX.Element {
  return {
    TOKENOMICS: (
      <DexterParagraph text="100'000 DEXTR is minted every 2 weeks. No max supply, but ~26M in 10 years at current rate." />
    ),
    TRADE: (
      <DexterParagraph text="Earn 0.35% on every trade, plus enjoy additional liquidity incentives for orders placed near the market price." />
    ),
    STAKE: (
      <DexterParagraph text="Delegate your $XRD to our Validator to earn $DEXTR." />
    ),
    CONTRIBUTE: (
      <DexterParagraph text="Whether you're a developer, designer, community manager or marketing enthusiast, your contributions are vital and give you the possibility to get rewarded in $DEXTR tokens. We are 100% community build with no formal team." />
    ),
  }[topicSection];
}

function getTopicSectionProps(
  topicSection: TopicSectionEnum
): TopicSectionProps {
  return {
    TOKENOMICS: {
      backgroundColor: "bg-dexter-grey-dark",
      title: "$DEXTR Token",
      body: getTopicSectionBody(TopicSectionEnum.TOKENOMICS),
      imageUrl: "/landing/dexter-mascotte-holding-coin.png",
      buttonUrl:
        "https://dexter-on-radix.gitbook.io/dexter/overview/how-are-contributors-rewarded/tokenomics",
      buttonText: "Learn more",
      reversed: true,
    },
    TRADE: {
      backgroundColor: "bg-dexter-grey-light",
      title: "Earn rewards by trading",
      body: getTopicSectionBody(TopicSectionEnum.TRADE),
      imageUrl: "/landing/treasury-earn-by-trading.png",
      buttonText: "Trade Now",
      buttonUrl: "/trade",
      reversed: false,
    },
    STAKE: {
      backgroundColor: "bg-dexter-grey-dark",
      title: "Stake $XRD to earn $DEXTR",
      body: getTopicSectionBody(TopicSectionEnum.STAKE),
      imageUrl: "/landing/staking-safe.png",
      buttonText: "Stake now",
      buttonUrl:
        "https://dashboard.radixdlt.com/network-staking/validator_rdx1s0sr7xsr286jwffkkcwz8ffnkjlhc7h594xk5gvamtr8xqxr23a99a",
      reversed: true,
    },
    CONTRIBUTE: {
      backgroundColor: "bg-dexter-grey-light",
      title: "Earn $DEXTR by contributing",
      body: getTopicSectionBody(TopicSectionEnum.CONTRIBUTE),
      imageUrl: "/landing/hands.png",
      buttonText: "Learn more",
      buttonUrl: "",
      reversed: false,
    },
  }[topicSection] as TopicSectionProps;
}

export default function Landing() {
  return (
    <div className="bg-dexter-grey-light">
      <HeroSection />
      <TopicSection topicSection={TopicSectionEnum.TOKENOMICS} />
      <TopicSection topicSection={TopicSectionEnum.TRADE} />
      <TopicSection topicSection={TopicSectionEnum.STAKE} />
      <TopicSection topicSection={TopicSectionEnum.CONTRIBUTE} />
    </div>
  );
}

function HeroSection() {
  return (
    <div>
      <div className={`${containerWidthAndPadding} h-[calc(100vh-74px)]`}>
        {/* Header Section */}
        <div className="flex justify-center mt-28 relative">
          <div
            className={
              `flex flex-col items-start justify-center ` +
              `min-[821px]:max-w-[60%] max-[820px]:items-center max-[820px]:text-center z-50 `
            }
          >
            <h1
              className={`!m-0 z-100 max-[820px]:max-w-[600px] max-[420px]:py-4`}
            >
              Decentralized Order Book Exchange on Radix
            </h1>
            <div className="relative">
              <BackgroundLights type={Device.MOBILE} />
              <DexterButton title="TRADE NOW" targetUrl="/trade" />
            </div>
          </div>
          <div className="relative">
            <BackgroundLights type={Device.DESKTOP} />
            <img
              src="/landing/dexter-mascotte.png"
              alt="Dexter Mascotte"
              className={`w-[300px] z-[100] max-[820px]:hidden relative `}
            />
          </div>
        </div>
        {/* Icons */}
      </div>
    </div>
  );
}

function BackgroundLights({ type }: { type: Device }) {
  if (type === Device.DESKTOP) {
    return (
      <>
        <img
          src="/landing/blue-light.png"
          alt="blue light"
          className="absolute opacity-60 z-10 scale-[4] top-[200px] right-[-239px] "
        />
        <img
          src="/landing/green-light.png"
          alt="green light"
          className="absolute z-10 scale-[4] top-[-147px] right-[122px] "
        />
        <img
          src="/landing/background-structures.png"
          alt="background structures"
          className="absolute opacity-10 z-20 scale-[2.5] top-[0px]"
        />
      </>
    );
  }
  if (type === Device.MOBILE) {
    return (
      <div className="min-[821px]:hidden">
        <img
          src="/landing/blue-light.png"
          alt="blue light"
          className="absolute opacity-40 scale-[3] top-[-0%] right-[-80%] z-[-30]"
        />
        <img
          src="/landing/green-light.png"
          alt="green light"
          className="absolute opacity-100 scale-[3] top-[-200%] left-[-50%] z-[-30] "
        />
        <img
          src="/landing/background-structures.png"
          alt="background structures"
          className="absolute opacity-5 scale-[3] top-[-150%] right-[-0%] z-[-20] "
        />
      </div>
    );
  }
}

function TopicSection({
  topicSection,
}: {
  topicSection: TopicSectionEnum;
}): JSX.Element {
  const x = getTopicSectionProps(topicSection);
  const {
    backgroundColor,
    title,
    body,
    imageUrl,
    buttonUrl,
    buttonText,
    reversed,
  } = x;
  return (
    <div className={`${backgroundColor} py-20`}>
      <div className={`${containerWidthAndPadding} `}>
        <div
          className={`flex items-center justify-center ${
            reversed ? "flex-row-reverse" : ""
          }`}
        >
          <div className="w-2/3 max-w-[520px]">
            <DexterHeading title={title} />
            {body}
            <DexterButton title={buttonText} targetUrl={buttonUrl} />
          </div>
          <img src={imageUrl} alt={title} className="w-[400px] px-8" />
        </div>
      </div>
    </div>
  );
}

interface DexterButtonProps {
  title: string;
  targetUrl?: string;
}

function DexterButton({ title, targetUrl }: DexterButtonProps) {
  return (
    <a href={targetUrl} className="z-100 min-w-[220px] max-w-[220px]">
      <button
        className={
          `min-h-[44px] w-[220px] px-4 my-6 mt-8 rounded ` +
          `bg-dexter-green-OG text-black uppercase ` +
          `opacity-100 cursor-pointer `
        }
      >
        <span className="font-bold text-sm tracking-[.1px] ">{title}</span>
      </button>
    </a>
  );
}

function DexterParagraph({ text }: { text: string }) {
  return <p className="text-sm tracking-wide py-2">{text}</p>;
}

function DexterHeading({ title }: { title: string }) {
  return (
    <>
      <h2
        className="text-md bg-gradient-to-r from-dexter-gradient-blue to-dexter-gradient-green to-50% bg-clip-text text-transparent font-normal"
        style={{
          margin: 0,
          marginBottom: "20px",
          marginTop: "0px",
          fontSize: "45px",
        }}
      >
        {title}
      </h2>
    </>
  );
}
