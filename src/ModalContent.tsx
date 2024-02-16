import { useState } from "react"
import { Link } from "react-router-dom"
import { PlusCircleIcon } from "@heroicons/react/24/outline"

type ChapterProps = {
    clickAction?: () => void
}


export function Welcome2({ clickAction }: ChapterProps) {
    return (
        <div>
                <h3 className="mx-auto font-bold text-2xl">Using the Religio DAO Map</h3>


            <ul className="list-disc list-inside mt-4">
                <li>This is a collaborative map to be filled by the community</li>
                <li><span>You can add places and events using the <PlusCircleIcon className="h-5 relative -top-[1px] inline" /> down right</span></li>
                <li>You can sign up to create yourself a profil</li>
                <li>You can place your profile on the map</li>
                <li>You can make use of #tags to tag stuff</li>
            </ul>

            <p className="py-3 mt-2">
This map is in beta test. Bug-reports and feature requests are very welcome. Send us your <Link to={"https://docs.google.com/forms/d/e/1FAIpQLSfA4d_rmwn0idUTyMoVRPBOtmHpUfNoeo_Jxs6ObUTzMp3Exw/viewform"} className="underline font-bold text-primary" >Feedback</Link>
                </p>
            <div className="grid">
                <button className="btn place-self-center mt-4" onClick={() => clickAction!()}>Start</button>
            </div>
        </div>
    )
}

export function Welcome1({ clickAction }: ChapterProps) {
    return (
        <div className="text-center">
            <h3 className="mx-auto font-bold text-lg"> "Heal the world, make it a better place, for you and for me, and the entire human race."</h3>
            <img className="mx-auto w-32 m-2" src="/religio256.png"></img>

            <p className="py-1 mt-3">
                In the spirit of unity and compassion, inspired by the timeless message of Michael Jackson's, we introduce a sanctuary in the digital realm—a map that transcends borders, connecting healers from every corner of the globe, in real live.
            </p>

            <p className="py-3">
                This platform is more than just a directory; it's a beacon of hope, a gathering of souls dedicated to the art of healing, so if you encompass the wisdom of yoga, the nurturing touch of Ayurveda, the deep knowledge of Human Design, the ancestral power of shamanism, the transformative journey of personal coach, or whatever form of healing, this web app is for you.
            </p>

            <p className="py-3">
                This web app is not just a directory; it's a vibrant community where every form of healer and seeker can connect, share, and grow. It embodies our belief in the transformative power of compassion and interconnectedness, offering a beacon of hope and healing in a world that yearns for balance and peace.                  </p>


            <div className="grid">
                <button className="btn place-self-center mt-4" onClick={() => clickAction!()}>Next</button>
            </div>
        </div>
    )
}


const close = () => {
    window.my_modal_3.close();
}


export const ModalContent = () => {

    const [chapter, setChapter] = useState<number>(1);
    //const setQuestsOpen = useSetQuestOpen()



    const ActiveChapter = () => {
        switch (chapter) {
            case 1:
                return <Welcome1 clickAction={() => {
                    setChapter(2);
                }} />
            case 2:
                return <Welcome2 clickAction={() => {
                    close();
                    setTimeout(() => {
                        //  setQuestsOpen(true);
                        setChapter(1);
                    }, 1000);
                }} />
            default: return <></>
        };
    };

    return (
        <ActiveChapter />
    )
}