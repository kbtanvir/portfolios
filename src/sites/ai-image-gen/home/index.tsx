import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { BiArea } from "react-icons/bi";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCheck,
  FaRegEnvelope,
  FaStar,
} from "react-icons/fa";
import { PiBathtubLight } from "react-icons/pi";
import { usePrevNextButtons } from "../../../hooks/useEmblaNavigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { offeringCardsDemoList } from "@/features/home/model/demo";
import { Routes, imageRoute } from "@/pages/sites/ai-image-gen";
import Image from "next/image";
import Link from "next/link";
import { IoBedOutline } from "react-icons/io5";

function Heading3({
  children = <>This is heading 3</>,
  reverseColor = false,
}: {
  children: React.ReactNode;
  reverseColor?: boolean;
}) {
  return (
    // <h3 className="text-[20px] font-bold text-purple-600 max-sm:text-base">
    <h3
      className={`text-[20px] font-bold ${
        reverseColor ? "text-white" : `text-black`
      } max-sm:text-base`}
    >
      {children}
    </h3>
  );
}
function Heading2({
  reverseColor = false,
  children = <>This is heading 2</>,
}: {
  reverseColor?: boolean;
  children: React.ReactNode;
}) {
  return (
    <h2
      className={`text-[44px] font-light leading-[1.3em] ${reverseColor ? "text-white" : `text-black`}  max-sm:text-[32px] max-sm:leading-normal`}
    >
      {children}
    </h2>
  );
}
function Text({
  children = <>This is a text</>,
  reverseColor = false,
}: {
  children: React.ReactNode;
  reverseColor?: boolean;
}) {
  return (
    <p
      className={`max-sm:text-[14px] ${reverseColor ? "text-white" : `text-black`} `}
    >
      {children}
    </p>
  );
}
export function PrimaryButton({
  children = <>Primary Button</>,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <Button
      onClick={onClick}
      className="max-sm:max-w-auto h-[50px] bg-purple-600"
    >
      {children}
    </Button>
  );
}

function WelcomeSliderItem({
  item,
}: {
  item: {
    title: string;
    discount: string;
    bg: string;
  };
}) {
  return (
    <div className="relative flex h-[1000px] items-center max-md:h-[75vh]">
      {/* Content */}
      <div
        className={`  section-box-w  grid cursor-pointer items-start gap-5 overflow-hidden max-md:gap-0`}
      >
        <div className="z-10 flex h-full w-full max-w-[600px] flex-col items-center justify-center gap-4 bg-opacity-50 max-sm:pb-[20vh]">
          <h3 className="text-base text-white">Some location in the city</h3>
          <h2 className="gap-0 text-[60px] font-semibold text-white max-sm:text-[44px]">
            Create beautiful art with
            <span
              className="mb-[-20px]  max-sm:mb-0"
              style={{
                backgroundImage:
                  "linear-gradient(315deg, #7F00FF 35%, #E100FF 50%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {" "}
              Artificial Intelligence
            </span>
          </h2>
          <div className="flex flex-col gap-10">
            <h3 className="text-base text-white">
              Create production-quality visual assets for your projects with
              unprecedented quality, speed, and style-consistency.
            </h3>
            <div className="relative flex h-[60px] w-full max-w-[500px] items-center justify-between gap-4  rounded-lg bg-white px-4  ">
              <Input
                type="text"
                placeholder="Enter your email"
                className="rounded-md border-none bg-gray-100 px-4 text-black max-sm:text-[12px]"
              />
              <Button
                variant={"outline"}
                className=" right-2 flex gap-2 bg-white uppercase text-black"
              >
                <FaRegEnvelope className="text-purple-500 max-md:text-xl max-sm:text-base" />
                <span className="max-md:hidden">Subscribe</span>
              </Button>
            </div>
            <div className="flex items-center gap-10">
              <span className="text-white">Popular Tags</span>
              <div className="flex gap-2">
                {["House", "Apartment", "Villa", "Office"].map((tag, i) => (
                  <Link href={Routes.shop.path} key={i}>
                    <Button
                      size={"sm"}
                      className=" bg-black/30 px-4 text-[10px]  text-white"
                    >
                      {tag}
                    </Button>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function WelcomeSection() {
  return (
    <div
      className={`  section-box-w  flex-center relative h-[1000px] cursor-pointer flex-col  gap-5 overflow-hidden text-center max-md:h-[75vh] max-md:gap-0`}
    >
      <h3 className="text-base text-white">Some location in the city</h3>
      <h2 className="gap-0 text-[60px] font-semibold text-white max-sm:text-[44px]">
        Create beautiful art with
        <span
          className="mb-[-20px]  max-sm:mb-0"
          style={{
            backgroundImage:
              "linear-gradient(315deg, #7F00FF 35%, #E100FF 50%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {" "}
          Artificial Intelligence
        </span>
      </h2>
      <div className="flex flex-col gap-10">
        <h3 className="text-base text-white">
          Create production-quality visual assets for your projects with
          unprecedented quality, speed, and style-consistency.
        </h3>
        <div className="relative flex h-[60px] w-full max-w-[500px] items-center justify-between gap-4  rounded-lg bg-white px-4  ">
          <Input
            type="text"
            placeholder="Enter your email"
            className="rounded-md border-none bg-gray-100 px-4 text-black max-sm:text-[12px]"
          />
          <Button
            variant={"outline"}
            className=" right-2 flex gap-2 bg-white uppercase text-black"
          >
            <FaRegEnvelope className="text-purple-500 max-md:text-xl max-sm:text-base" />
            <span className="max-md:hidden">Subscribe</span>
          </Button>
        </div>
        <div className="flex items-center gap-10">
          <span className="text-white">Popular Tags</span>
          <div className="flex gap-2">
            {["House", "Apartment", "Villa", "Office"].map((tag, i) => (
              <Link href={Routes.shop.path} key={i}>
                <Button
                  size={"sm"}
                  className=" bg-black/30 px-4 text-[10px]  text-white"
                >
                  {tag}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function AboutSection() {
  return (
    <>
      <div className="section-box-w section-py flex gap-24 max-xl:gap-10   max-md:flex-col max-md:gap-10 ">
        {/* Image */}
        <div className="w-full max-w-[450px] max-md:max-w-full">
          <div className=" relative h-[600px] max-md:h-[300px]">
            <Image
              src={"/sites/real-estate/demo-real-estate-slider-01.jpg"}
              fill
              alt="Picture of the author"
              className="z-0 object-cover"
            />
          </div>
        </div>
        {/* Text box */}
        <div className="flex flex-col justify-center gap-4  max-md:w-full">
          <Heading3>Online property marketplace</Heading3>
          <Heading2>
            We help you find your{" "}
            <span className="underline-green-300 font-bold text-purple-600 underline">
              new place.
            </span>
          </Heading2>

          <p className="max-w-[400px] py-6 leading-9 max-md:max-w-full max-sm:py-2 max-sm:leading-normal ">
            Online property marketplace to buy, sell, and rent residential and
            commercial properties. Used by millions of renters to find property.
          </p>

          <div className="grid gap-4">
            {[
              {
                text: "10,000+ people trusting our agency.",
              },
              {
                text: "Highest rental income projects",
              },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="flex-center h-10  w-10 rounded-full bg-green-100 text-green-500 max-sm:size-5 max-sm:text-[12px]">
                  <FaCheck />
                </div>
                <div className="font-bold max-sm:text-[14px]">{item.text}</div>
              </div>
            ))}
          </div>
          <div className="max-sm:item-start flex w-full flex-wrap items-center gap-5 self-start pt-10 max-md:pt-5   max-sm:justify-start">
            <PrimaryButton>About community</PrimaryButton>
            <Button variant={"link"} className="flex-center gap-2">
              Our services <FaArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
function CategorySection() {
  return (
    <>
      <div className="border-y-2">
        <div className="section-box-w flex items-center max-md:max-w-full  max-md:px-0">
          <div className="justify-stretchs  flex w-full items-center divide-x-2 max-md:grid">
            {/* Text box */}
            <div className="max-md:section-px  w-full max-w-[200px] pr-10 text-xl font-bold max-md:max-w-full max-md:border-b-2 max-md:py-10">
              What are you{" "}
              <span className="underline-green-300 font-bold text-purple-600 underline">
                looking
              </span>{" "}
              for?
            </div>
            {/* Category box grid */}
            <div className="grid w-full grid-cols-5 flex-wrap   divide-x-2 max-md:border-t-gray-800 max-sm:grid-cols-2">
              {[
                {
                  icon: <IoBedOutline />,
                  title: "House",
                  count: 100,
                },
                {
                  icon: <IoBedOutline />,
                  title: "House",
                  count: 100,
                },
                {
                  icon: <IoBedOutline />,
                  title: "House",
                  count: 100,
                },
                {
                  icon: <IoBedOutline />,
                  title: "House",
                  count: 100,
                },
                {
                  icon: <IoBedOutline />,
                  title: "House",
                  count: 100,
                },
              ].map((item, i) => (
                <div
                  className="relative grid h-[180px] w-full place-items-center content-center justify-center gap-2 max-md:h-[130px]  max-sm:border-b-2 last:max-sm:border-b-0"
                  key={i}
                >
                  <div className="text-[40px] font-bold max-md:text-[30px]">
                    {item.icon}
                  </div>
                  <div className="font-semibold max-md:text-[14px]">
                    {item.title}
                  </div>
                  <div className="flex-center absolute left-4 top-4 rounded-md bg-purple-100 px-2 py-1 text-[12px] font-bold text-purple-500">
                    {item.count}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function PropertyListCard() {
  return (
    <div className="relative w-full cursor-pointer flex-col overflow-hidden rounded-lg border border-solid border-gray-100 bg-white shadow-sm transition-all duration-300 ease-in-out hover:shadow-lg max-md:ml-0 max-md:w-full ">
      {/* THUMBNAIL BOX */}
      <div className="relative flex w-full flex-col rounded-lg">
        {/* THUMBNAIL */}
        <div className="relative h-[260px]">
          <Image
            loading="lazy"
            src={"/sites/real-estate/demo-real-estate-slider-01.jpg"}
            alt="Picture of the author"
            fill
          />
        </div>
        {/* TAGS */}
        <div className="absolute flex w-full flex-col items-start">
          <div className="flex items-stretch pl-6 pt-6">
            <span className="justify-self-start whitespace-nowrap rounded-md border border-solid border-white border-opacity-10 bg-red-600 px-3.5 py-1.5 text-center text-xs leading-3 text-white">
              Rent
            </span>
          </div>
        </div>
      </div>
      {/* DETAILS BOX */}
      <div className="flex flex-col gap-6 px-10 py-6 max-md:px-6  ">
        {/* Title */}
        <div className="">
          <h3 className="text-lg font-bold">Luxury villa in Texas</h3>
          <p className="text-base opacity-80 ">982 Monroe ave, rochester</p>
        </div>
        {/* convinience */}
        <div className="flex flex-wrap justify-between gap-2">
          {[
            {
              icon: <IoBedOutline />,
              title: "Beds",
              amount: "04",
            },
            {
              icon: <PiBathtubLight />,
              title: "Baths",
              amount: "05",
            },
            {
              icon: <BiArea />,
              title: "Area",
              amount: "780m2",
            },
          ].map((conv, index) => (
            <div
              key={index}
              className="flex flex-col flex-wrap gap-2 text-black first:pl-0 last:pr-0"
            >
              <div className="text-[24px]">{conv.icon}</div>
              <div className="text-base font-bold">{conv.amount}</div>
              <div className="text-[14px]">{conv.title}</div>
            </div>
          ))}
        </div>
      </div>
      {/* buttons and price */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-t-2 px-10 py-6 max-md:px-6">
        <p className="text-[20px] font-bold opacity-80">$600,000</p>
        <Button className="uppercase">View details</Button>
      </div>
    </div>
  );
}

function PropertyListSection() {
  return (
    <>
      <div className="section-py bg-gray-100">
        <div className="section-box-w">
          {/* SECTION TITLE 
          -----------------*/}
          <div className="flex w-full place-items-center content-center items-center justify-between gap-10 pb-20 max-md:grid max-md:justify-center max-sm:place-items-start max-sm:gap-6">
            <div className="">
              <Heading2>
                Property for{" "}
                <span className="underline-green-300 font-bold text-purple-600 underline">
                  sell and rent
                </span>
              </Heading2>
            </div>
            <Button
              variant="link"
              className="flex-center m-0 gap-2 p-0 text-lg"
            >
              View all properties{" "}
              <div className="flex-center ml-2 h-10 w-10 rounded-full bg-black text-[20px] text-white">
                <FaArrowRight />
              </div>
            </Button>
          </div>

          {/* Propertiy List
          -----------------*/}
          <div className="autofit-grid-250 grid w-full  gap-6 ">
            <PropertyListCard />
            <PropertyListCard />
            <PropertyListCard />
            <PropertyListCard />
            <PropertyListCard />
            <PropertyListCard />
          </div>
        </div>
      </div>
    </>
  );
}
function WhyUs1Section() {
  return (
    <>
      <div className="section-box-w section-py flex flex-row-reverse gap-24 max-xl:gap-10 max-md:flex-col max-md:gap-10">
        {/* Image */}
        <div className="w-full max-w-[500px] max-md:max-w-full">
          <div className=" relative h-[600px] max-md:h-[300px]">
            <Image
              src={"/sites/real-estate/demo-real-estate-slider-01.jpg"}
              fill
              alt="Picture of the author"
              className="z-0 object-cover"
            />
          </div>
        </div>
        {/* Text box */}
        <div className="flex w-full  flex-col  gap-4">
          <Heading3>Online property marketplace</Heading3>
          <Heading2>
            Accurate to 99% of a{" "}
            <span className="underline-green-300 font-bold text-purple-600 underline">
              property`s
            </span>{" "}
            details.
          </Heading2>

          <div className="flex w-full  flex-col gap-10 pt-14  ">
            {[
              {
                text: "10,000+ people trusting our agency.",
                desc: "Browse millions of properties in your city save your favorites.",
                icon: (
                  <Image
                    src={`${imageRoute}/loan.png`}
                    alt=""
                    fill
                    objectFit="cover"
                  />
                ),
              },
              {
                text: "Highest rental income projects",
                desc: "Browse millions of properties in your city save your favorites.",
                icon: (
                  <Image
                    src={`${imageRoute}/satisfaction.png`}
                    alt=""
                    fill
                    objectFit="cover"
                  />
                ),
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-wrap  items-start gap-6 max-sm:flex-col"
              >
                <div className="relative h-[80px] w-[80px] max-w-[80px]   overflow-hidden rounded-[100%] bg-green-100   text-green-500">
                  {item.icon}
                </div>
                <div className="flex flex-1 flex-col gap-4">
                  <div className="font-bold">{item.text}</div>
                  <div className="opacity-70">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-4 pt-10">
            <Button>Learn more</Button>{" "}
            <Button
              variant={"outline"}
              className="flex-center gap-2 border-2 border-black"
            >
              Trusted agents <FaArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

function LocationSliderItem() {
  return (
    <div className="ml-10 flex max-sm:ml-4">
      <div className="relative  h-[485px] w-[360px] max-sm:h-[280px] max-sm:w-[200px]">
        <Image
          src={"/sites/real-estate/demo-real-estate-slider-01.jpg"}
          fill
          alt="Picture of the author"
          className="z-0 object-cover"
        />
        <div className="absolute h-full w-full bg-gradient-to-t from-gray-800 mix-blend-overlay" />
        <div className="relative h-full  w-full text-white">
          <div className="absolute bottom-0 left-0 w-full p-6">
            <div className="pb-4 text-2xl font-bold max-sm:pb-2 max-sm:text-base">
              Washington DC, USA
            </div>
            <div className="">20 property listing</div>
          </div>
          <div className="absolute flex w-full flex-col items-start">
            <div className="flex items-stretch pl-6 pt-6">
              <span className="justify-self-start whitespace-nowrap rounded-md border border-solid border-white border-opacity-10 bg-red-600 px-3.5 py-1.5 text-center text-xs leading-3 text-white">
                Rent
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LocationsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      slidesToScroll: 1,
      align: "start",
      loop: true,
    },
    [Autoplay()],
  );

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <>
      <div className="section-py bg-gray-100">
        <div className="section-box-w relative flex gap-14 max-lg:flex-wrap">
          {/* text box */}
          <div className="grid content-center items-center gap-4">
            <Heading3>Online property marketplace</Heading3>
            <Heading2>
              We are available in{" "}
              <span className="underline-green-300 font-bold text-purple-600 underline">
                many countries
              </span>
            </Heading2>
            <p className="max-w-[400px] pb-10 pt-6 max-md:pb-0">
              Online property marketplace to buy, sell, and rent residential and
              commercial properties. Used by millions of renters to find
              property.
            </p>
            <div className="relative flex gap-4 max-md:hidden">
              <Button
                onClick={onPrevButtonClick}
                disabled={prevBtnDisabled}
                className="h-20 w-20 rounded-full   bg-white text-[20px]  text-gray-600"
              >
                <FaArrowLeft />
              </Button>
              <Button
                onClick={onNextButtonClick}
                disabled={nextBtnDisabled}
                className="h-20 w-20  rounded-full     bg-white text-[20px]  text-gray-600"
              >
                <FaArrowRight />
              </Button>
            </div>
          </div>
          {/* slider */}
          <div className=" mr-[-20vw] ">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex max-w-[60em]  max-xl:max-w-[44em] max-lg:max-w-[100vw]">
                {" "}
                {Array(4)
                  .fill(0)
                  .map((_, i) => (
                    <LocationSliderItem key={i} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
function TestimonialSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      slidesToScroll: 1,
      align: "start",
      loop: true,
    },
    [Autoplay()],
  );

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <>
      <>
        <div className="section-box-w section-py flex gap-24 max-xl:gap-10 max-md:flex-col max-md:gap-10">
          {/* Image */}
          <div className="w-full max-w-[500px] max-md:max-w-full">
            <div className=" relative h-[600px] max-md:h-[300px]">
              <Image
                src={"/sites/real-estate/demo-real-estate-slider-01.jpg"}
                fill
                alt="Picture of the author"
                className="z-0 object-cover"
              />
            </div>
          </div>
          {/* Text box */}
          <div className="flex w-full  flex-col  gap-4">
            <Heading3>Clients feedback</Heading3>
            <Heading2>
              Here is what our{" "}
              <span className="underline-green-300 font-bold text-purple-600 underline">
                clients
              </span>{" "}
              have to say
            </Heading2>
            {/* Testimonial slider */}{" "}
            <div className="grid max-w-[400px] pt-6 max-md:max-w-[100vw]">
              <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                  {[
                    {
                      text: "Alec Thompson",
                      desc: "I just bought a house with the help of this company. Thank you for your support and help with finding me a home. I am very happy with the service and the help, everything was perfect. Thank you very much.",
                      icon: (
                        <Image src={`${imageRoute}/loan.png`} alt="" fill />
                      ),
                      rating: 5,
                    },
                    {
                      text: "Alec Thompson",
                      desc: "I just bought a house with the help of this company. Thank you for your support and help with finding me a home. I am very happy with the service and the help, everything was perfect. Thank you very much.",
                      icon: (
                        <Image src={`${imageRoute}/loan.png`} alt="" fill />
                      ),
                      rating: 5,
                    },
                    {
                      text: "Alec Thompson",
                      desc: "I just bought a house with the help of this company. Thank you for your support and help with finding me a home. I am very happy with the service and the help, everything was perfect. Thank you very much.",
                      icon: (
                        <Image src={`${imageRoute}/loan.png`} alt="" fill />
                      ),
                      rating: 5,
                    },
                  ].map((item, i) => (
                    <div key={i} className=" ml-10 ">
                      <div className="grid  w-[400px] gap-10    max-sm:w-[100vw]">
                        <div className="opacity-70">{item.desc}</div>
                        <div className=" flex items-center justify-start gap-10">
                          <div className="relative h-[80px]  w-[80px]  rounded-full bg-green-100   text-green-500">
                            {item.icon}
                          </div>
                          <div className="grid  gap-4">
                            <div className="font-bold">{item.text}</div>
                            <div className="flex">
                              {Array(item.rating)
                                .fill(0)
                                .map((_, i) => (
                                  <div key={i} className="text-yellow-500">
                                    <FaStar />
                                  </div>
                                ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative flex gap-4 pt-10">
              <Button
                onClick={onPrevButtonClick}
                disabled={prevBtnDisabled}
                variant={"outline"}
                className="h-20 w-20 rounded-full    text-[20px]  "
              >
                <FaArrowLeft />
              </Button>
              <Button
                onClick={onNextButtonClick}
                disabled={nextBtnDisabled}
                variant={"outline"}
                className="h-20 w-20  rounded-full      text-[20px]  "
              >
                <FaArrowRight />
              </Button>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
function CTASection() {
  return (
    <>
      <div className="min-h-[10em] border-t-2 bg-gray-50 ">
        <div className="section-box-w mt-[-6em] max-md:mt-0 max-md:pt-20 max-sm:pt-10">
          <div className="flex flex-wrap items-center justify-between gap-10 rounded-xl bg-purple-500 px-14 py-14 max-md:flex-wrap max-md:justify-center max-sm:gap-4 max-sm:px-4 max-sm:py-4">
            <div className="flex flex-col  gap-5 max-md:w-full max-md:text-center max-sm:gap-0 ">
              <Heading2 reverseColor>
                Subscribe to{" "}
                <span className="font-bold underline">newsletter</span>
              </Heading2>
              <Text reverseColor>Social media its ways of our excellence.</Text>
            </div>
            <div className="relative flex h-[60px] w-full max-w-[400px] items-center justify-between gap-4  rounded-lg bg-white px-4  ">
              <Input
                type="text"
                placeholder="Enter your email"
                className="rounded-md border-none bg-gray-100 px-4 text-black max-sm:text-[12px]"
              />
              <Button
                variant={"outline"}
                className=" right-2 flex gap-2 bg-white uppercase text-black"
              >
                <FaRegEnvelope className="text-purple-500 max-md:text-xl max-sm:text-base" />
                <span className="max-md:hidden">Subscribe</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function OfferingsCards() {
  return (
    <div className="section-box-w section-py">
      <div className="grid w-full  grid-cols-4  content-center  gap-8 max-xl:grid-cols-2 max-md:py-10 max-sm:grid-cols-1 max-sm:gap-3 max-sm:py-4">
        {offeringCardsDemoList.map((item, i) => (
          <div
            key={i}
            className="flex min-h-[150px] flex-col items-start justify-center gap-2 rounded-lg  p-8  "
          >
            <div className={`text-[50px] text-emerald-600`}>{item.icon}</div>
            <h3 className="pt-3 font-bold">{item.title}</h3>
            <p className="text-gray-400">{item.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export function View() {
  return (
    <main className="bg-gray-900 text-white">
      <WelcomeSection />
      <OfferingsCards />
      <AboutSection />
      <CategorySection />
      <PropertyListSection />
      <WhyUs1Section />
      <LocationsSection />
      <TestimonialSection />
      <CTASection />
    </main>
  );
}