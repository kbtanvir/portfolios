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
import { IoCarSportOutline } from "react-icons/io5";
import { PiBathtubLight } from "react-icons/pi";
import { useEmblaNavigation } from "../../../hooks/useEmbla";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { siteNavigation } from "@/lib/const/navigation";
import Image from "next/image";
import { IoBedOutline } from "react-icons/io5";

import { faker } from "@faker-js/faker";
import { Button } from "../components/button";
import { Text } from "../components/text";
import { Heading2, Heading3, classes } from "../theme";

function WelcomeSliderItem({
  item,
}: {
  item: {
    bed: string;
    parking: string;
    baths: string;
    price: string;
    bg: string;
  };
}) {
  return (
    <CarouselItem className="relative h-[100vh]  ">
      {/* image */}
      <div className="absolute left-0 top-0 z-0 h-full w-full">
        <div className="relative h-full">
          <div className="absolute top-0 z-10 h-full w-full  bg-gradient-to-l from-slate-900/5 to-gray-900 mix-blend-multiply" />
          <Image
            src={`${siteNavigation.realEstate.home.path}/${item.bg}`}
            fill
            alt=""
            className="z-0 object-cover"
          />
        </div>
      </div>
      <div
        className={`section-box-w  grid cursor-pointer items-start gap-5 overflow-hidden max-md:gap-0`}
      >
        <div className="absolute z-10 flex h-full w-full flex-col justify-center gap-4 bg-opacity-50 max-sm:pb-[16vh]">
          <h3 className="text-base text-white">Some location in the city</h3>
          <h2 className="grid  gap-0 text-[80px] text-white max-md:text-[44px] max-sm:text-[28px]">
            <span className="mb-[-20px] font-light max-sm:mb-0">Luxurious</span>
            <span className="font-bold">Mension</span>
          </h2>
          <div className="flex flex-wrap gap-4 ">
            <Button className="mt-2 bg-white text-slate-900 ring-white hover:bg-slate-900 hover:text-white hover:ring-slate-900 max-sm:min-w-0">
              Schedule Visit
            </Button>
            <Button
              className="mt-2 text-white ring-white hover:ring-slate-900 max-sm:min-w-0"
              variant="outline"
            >
              View details
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 z-10 flex flex-wrap place-items-center gap-10 rounded-tl-lg bg-white px-10 py-10 max-sm:justify-between   max-sm:gap-6  max-sm:bg-white/65 max-sm:px-10 max-sm:py-6">
          <div className="flex  divide-x ">
            {/* convinience */}
            {[
              {
                icon: <IoBedOutline />,
                title: `${item.bed} Beds`,
              },
              {
                icon: <PiBathtubLight />,
                title: `${item.baths} Baths`,
              },
              {
                icon: <IoCarSportOutline />,
                title: `${item.parking} Parking`,
              },
            ].map((conv, index) => (
              <div
                key={index}
                className="grid place-items-center items-center gap-2 px-5  text-slate-900 first:pl-0 last:pr-0"
              >
                <div className="text-[40px]">{conv.icon}</div>
                <div className="text-[14px]">{conv.title}</div>
              </div>
            ))}
          </div>
          <div className="grid place-items-center gap-2 max-sm:place-items-start">
            For sell price
            <div className="text-3xl font-bold max-sm:text-xl">
              ${item.price}
            </div>
          </div>
        </div>
      </div>
    </CarouselItem>
  );
}
function WelcomeSection() {
  return (
    <Carousel
      // plugins={[plugin.current]}
      // // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
      // onMouseEnter={plugin.current.start}
      // // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
      // onMouseLeave={plugin.current.stop}
      className=" w-full "
    >
      <CarouselContent>
        {[
          {
            bed: "4",
            parking: "2",
            baths: "3",
            bg: "ws1.jpg",
            price: "600,000",
          },
          {
            bed: "5",
            parking: "3",
            baths: "4",
            price: "1,200,000",
            bg: "ws2.jpg",
          },
        ].map((item, index) => (
          <WelcomeSliderItem key={index} item={item} />
        ))}
      </CarouselContent>
    </Carousel>
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
            <Button>About community</Button>
            <Button variant={"outline"} className="flex-center gap-2">
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
                  imageUrl: `${siteNavigation.realEstate.home.path}/categories/appartments.png`,
                  title: "Apartment",
                  count: 159,
                },
                {
                  imageUrl: `${siteNavigation.realEstate.home.path}/categories/home.png`,
                  title: "Home",
                  count: 211,
                },
                {
                  imageUrl: `${siteNavigation.realEstate.home.path}/categories/condo.png`,
                  title: "Condo",
                  count: 652,
                },
                {
                  imageUrl: `${siteNavigation.realEstate.home.path}/categories/office.png`,
                  title: "Office",
                  count: 925,
                },
                {
                  imageUrl: `${siteNavigation.realEstate.home.path}/categories/shop.png`,
                  title: "Shop",
                  count: 520,
                },
              ].map((item, i) => (
                <div
                  className="relative grid h-[180px] w-full cursor-pointer place-items-center content-center justify-center  gap-4 transition-all duration-300 ease-in-out hover:bg-gray-50 hover:shadow-lg max-md:h-[130px] max-sm:h-[100px] max-sm:w-full max-sm:gap-2 max-sm:border-b-2 last:max-sm:border-b-0"
                  key={i}
                >
                  <div className="relative size-12">
                    <Image
                      src={item.imageUrl}
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="font-semibold max-md:text-[14px]">
                    {item.title}
                  </div>
                  <div className="flex-center absolute left-4 top-4 rounded-md bg-purple-100 px-2 py-1 text-[12px] font-bold text-purple-500">
                    {item.count}K
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
            src={faker.image.urlLoremFlickr({
              category: "house",
            })}
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
              className="flex flex-col flex-wrap gap-2 text-slate-900 first:pl-0 last:pr-0"
            >
              <div className="text-[24px]">{conv.icon}</div>
              <div className="text-base font-bold">{conv.amount}</div>
              <div className="text-[14px]">{conv.title}</div>
            </div>
          ))}
        </div>
      </div>
      {/* buttons and price */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-t-2 py-6 pl-10 pr-4  max-md:px-6">
        <p className="text-[20px] font-bold opacity-80">$600,000</p>
        <Button className="max-h-[40px] min-w-0 px-5 max-sm:min-w-0 max-sm:text-[12px]">
          View details
        </Button>
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
            <Button variant="link" className="flex-center m-0 gap-2">
              View all properties{" "}
              <span
                className={`flex-center ${classes.ringColor} ml-4 size-10 rounded-[100%] bg-slate-900 bg-transparent  p-0 px-0 py-0 text-[20px] text-slate-900 ring-[3px]  hover:bg-slate-900  hover:text-white max-sm:size-10 max-sm:text-xl`}
              >
                <FaArrowRight />
              </span>
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
              src={`${siteNavigation.realEstate.home.path}/ab1.png`}
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
                    src={`${siteNavigation.realEstate.home.path}/loan.png`}
                    alt=""
                    fill
                    className="object-cover"
                  />
                ),
              },
              {
                text: "Highest rental income projects.",
                desc: "Browse millions of properties in your city save your favorites.",
                icon: (
                  <Image
                    src={`${siteNavigation.realEstate.home.path}/satisfaction.png`}
                    alt=""
                    fill
                    className="object-cover"
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
          <div className="flex gap-4 pt-10 max-md:flex-wrap">
            <Button>Learn more</Button>{" "}
            <Button variant={"outline"} className="flex-center gap-2">
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
          src={faker.image.urlLoremFlickr({
            category: "city",
          })}
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
  } = useEmblaNavigation(emblaApi);

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
                variant={"icon"}
                className="size-14"
              >
                <FaArrowLeft />
              </Button>
              <Button
                onClick={onNextButtonClick}
                disabled={nextBtnDisabled}
                variant={"icon"}
                className="size-14"
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
  } = useEmblaNavigation(emblaApi);

  return (
    <>
      <>
        <div className="section-box-w section-py flex gap-24 max-xl:gap-10 max-md:flex-col max-md:gap-10">
          {/* Image */}
          <div className="w-full max-w-[500px] max-md:max-w-full">
            <div className=" relative h-[600px] max-md:h-[300px]">
              <Image
                src={`${siteNavigation.realEstate.home.path}/testimonial.jpg`}
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
                        <Image
                          src={`${siteNavigation.realEstate.home.path}/loan.png`}
                          alt=""
                          height={80}
                          width={80}
                          layout="responsive"
                        />
                      ),
                      rating: 5,
                    },
                    {
                      text: "Alec Thompson",
                      desc: "I just bought a house with the help of this company. Thank you for your support and help with finding me a home. I am very happy with the service and the help, everything was perfect. Thank you very much.",
                      icon: (
                        <Image
                          src={`${siteNavigation.realEstate.home.path}/loan.png`}
                          alt=""
                          height={80}
                          width={80}
                          layout="responsive"
                        />
                      ),
                      rating: 5,
                    },
                    {
                      text: "Alec Thompson",
                      desc: "I just bought a house with the help of this company. Thank you for your support and help with finding me a home. I am very happy with the service and the help, everything was perfect. Thank you very much.",
                      icon: (
                        <Image
                          src={`${siteNavigation.realEstate.home.path}/loan.png`}
                          alt=""
                          height={80}
                          width={80}
                          layout="responsive"
                        />
                      ),
                      rating: 5,
                    },
                  ].map((item, i) => (
                    <div key={i} className="ml-10">
                      <div className=" testimonial-slider-item  grid w-[400px]  gap-10 max-sm:w-[100vw] max-sm:pr-10">
                        <div className="opacity-70">{item.desc}</div>
                        <div className=" flex items-center justify-start gap-10">
                          <div className="relative h-[80px]  w-[80px]  rounded-full bg-green-100   text-green-500">
                            {item.icon}
                          </div>
                          <div className="flex flex-col gap-4">
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
                variant={"icon"}
                className="size-14"
              >
                <FaArrowLeft />
              </Button>
              <Button
                onClick={onNextButtonClick}
                disabled={nextBtnDisabled}
                variant={"icon"}
                className="size-14"
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
          <div className="flex flex-wrap items-center justify-between gap-10 rounded-xl bg-purple-600 px-14 py-14 max-md:flex-wrap max-md:justify-center max-sm:gap-4 max-sm:px-6 max-sm:py-6">
            <div className="flex flex-col  gap-5 max-md:w-full max-md:text-center">
              <Heading2 className="text-white [&>span]:text-white">
                Subscribe to{" "}
                <span className="font-bold underline">newsletter</span>
              </Heading2>
              <Text className="text-white">
                Social media its ways of our excellence.
              </Text>
            </div>
            <div className="relative flex h-[62px] w-full max-w-[500px] items-center justify-between gap-4 rounded-md  bg-white px-2 max-sm:h-[54px]  ">
              <Input
                type="text"
                placeholder="Enter your email"
                className="rounded-md border-none  px-8 text-slate-900 max-sm:px-4 max-sm:text-[12px]"
              />
              <Button className="min-w-34 right-2 gap-4 rounded-sm  bg-purple-600 ring-purple-600 hover:bg-slate-900 max-md:min-w-0 max-sm:w-14 max-sm:min-w-0">
                <FaRegEnvelope className="icon text-lg  text-white max-md:text-xl max-sm:text-base" />
                <span className="text-white max-md:hidden">Subscribe</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export function View() {
  return (
    <main>
      <WelcomeSection />
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
