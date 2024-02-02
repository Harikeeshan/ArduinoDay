import React from 'react'

type Props = {}

const style = {
  infoCardText: "space-y-4  text-30 text-center",
  infoCardName: "text-xl font-medium",
  infoCardDesc: "text-xs text-30/80",
  infoCardPost: "text-sm font-medium",
  image: "object-cover h-64 w-full rounded-md",
};

const Speakers = ({ }: Props) => {
  return (
    <div className='flex items-center w-full justify-center'>
      <div id='speakers' className="mx-5 mt-3 lg:max-w-7xl">
        <p className="font-semibold text-4xl text-80">
          SPEAKERS
        </p>
        <p className="text-base text-80/60">
            Behold, the orators for the program of the second day.
        </p>
        <div className=''>
          <div id="speakersGrid" className="mt-10 mb-24 grid gap-3 md:grid-cols-2 lg:grid-cols-4 ">
            <div className="md:order-1 md:col-span-2">
              <img src="/dileepa.png" alt="My Image" className={style.image} />
            </div>
            <div className="border-2 border-30 rounded-md px-6 grid h-[200px] md:h-[100%] place-items-center md:order-2 md:col-span-2">
              <p className={style.infoCardText}>
                <div className={style.infoCardName}>
                  Dileepa Jayawardena
                </div>
                <div className={style.infoCardDesc}>
                Unlocking the Potential of Tomorrow's Technology with Arduino - In this speech, we will explore how Arduino is enabling us to unlock the potential of emerging technologies such as artificial intelligence, robotics, and virtual reality, and how we can use these tools to create a better future.
                </div>
                <div className={style.infoCardPost}>
                  Co-founder at myhub.lk
                </div>
              </p>
            </div>
            <div className="md:order-4 lg:order-3">
              <img src="/migara.jpg" alt="My Image" className={style.image} />
            </div>
            <div className="border-2 border-30 rounded-md px-6 h-[200px] md:h-[100%] grid place-items-center md:order-3 lg:order-4">
              <p className={style.infoCardText}>
                <div className={style.infoCardName}>
                  Migara Amithodhana
                </div>
                <div className={style.infoCardDesc}>
                The Cloud Revolution: Disrupting Traditional Computing and Driving Innovation - This speech will showcase how cloud computing is revolutionizing the world of computing, from the rise of software-as-a-service (SaaS) to the proliferation of cloud-native applications and infrastructure.
                </div>
                <div className={style.infoCardPost}>
                  CEO of Magic Bit
                </div>
              </p>
            </div>
            <div className="md:order-5">
              <img src="/ushan.jpg" alt="My Image" className={`${style.image}`} />
            </div>
            <div className="border-2 border-30 rounded-md px-6 h-[200px] md:h-[100%] grid place-items-center md:order-6">
              <p className={style.infoCardText}>
                <div className={style.infoCardName}>
                  Ushan Chamindha
                </div>
                <div className={style.infoCardDesc}>
                Connecting the Unconnected: The Wonders of the Internet of Things - In this speech, we will explore the fascinating world of IoT and discuss how it connects people, places, and things like never before.
                </div>
                <div className={style.infoCardPost}>
                  CEO of Gavesha
                </div>
              </p>
            </div>

            <div className="md:order-8">
              <img src="/chanux.jpeg" alt="My Image" className={style.image} />
            </div>
            <div className="border-2 border-30 rounded-md px-6 h-[200px] md:h-[100%] grid place-items-center md:order-7">
              <p className={style.infoCardText}>
                <div className={style.infoCardName}>
                  Chanux Bro
                </div>
                <div className={style.infoCardDesc}>
                The Power of Storytelling: How to Craft a Compelling Product Narrative - This speech will showcase the importance of storytelling in product marketing, providing tips and tricks for crafting a compelling product narrative that resonates with customers.
                </div>
                <div className={style.infoCardPost}>
                  YouTuber 
                </div>
              </p>
            </div>

            <div className="md:order-9 lg:order-10">
              <img src="/Untitled design.png" alt="My Image" className={style.image} />
            </div>
            <div className="border-2 border-30 rounded-md px-6 h-[200px] md:h-[100%] grid place-items-center md:order-10 lg:order-9">
              <p className={style.infoCardText}>
                <div className={style.infoCardName}>
                Chanaka Prasad 
                </div>
                <div className={style.infoCardDesc}>
                Bridging the Digital and Physical Worlds: Front End Development for Arduino Products - In this speech, we will explore how front end development can be used to create intuitive and engaging user interfaces for Arduino products, bridging the gap between the digital and physical worlds.

                </div>
                
                { <div className={style.infoCardPost}>
                Co-Founder of UnityLKLabs

                </div> }
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>

  )
}

export default Speakers
