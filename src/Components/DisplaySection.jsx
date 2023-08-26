import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-hot-toast";
import location from "../assets/location-icon.svg";
import twitter from "../assets/twitter-icon.svg";
import company from "../assets/company-icon.svg";
import website from "../assets/website-icon.svg";

function DisplaySection() {
    const [data, setData] = useState([]);
    const url = "https://api.github.com/users/";
    const { NameData } = useSelector((state) => state);

    async function getData() {
        const new_url = url + NameData[0];
        try {
            const url_data = await axios.get(new_url);
            setData(url_data.data);
        } catch {
            toast.error("No User Found");
        }
    }
    function DateHandler(date) { }
    useEffect(() => {
        if (NameData.length > 0) getData();
    }, [NameData]);

    return (
        <div class="profileContainer">
            <div class="profileContent">
                <div class="profileHeader">
                    <div className="Img_text">
                        <img id="userImage" src={data.avatar_url}></img>
                        <div class="profileInfoWrapper">
                            <div class="profileName" id="name">
                                {data.name}
                            </div>
                            <a
                                href=""
                                target="_blank"
                                rel="noopener noreferrer"
                                id="username"
                            >
                                @{data.login}
                            </a>
                        </div>
                    </div>
                    <div id="date">
                        Joined
                        <div>
                            {(() => {
                                if (data.id >= 0) {
                                    // if
                                    const year = data.created_at.split("-")[0];
                                    const month = data.created_at.split("-")[1]; // Subtract 1 from the month
                                    const date = data.created_at.split("-")[2].split("T")[0];
                                    const months = [
                                        " January ",
                                        " February ",
                                        " March ",
                                        " April ",
                                        " May ",
                                        " June ",
                                        " July ",
                                        " August ",
                                        " September ",
                                        " October ",
                                        " November ",
                                        " December ",
                                    ];
                                    return `${date}  ${months[month - 1]}  ${year}`;
                                }
                            })()}
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div id="profileBio">
                    {(() => {
                        if (data.bio === null) {
                            return `This Profile has no Bio`;
                        }
                    })()}
                </div>
            </div>

            <div class="statsContainer">
                <div class="profileStats">
                    <span class="statsTitle">Repos</span>
                    <span>{data.public_repos}</span>
                </div>
                <div class="profileStats">
                    <span class="statsTitle">Followers</span>
                    <span>{data.followers}</span>
                </div>
                <div class="profileStats">
                    <span class="statsTitle">Following</span>
                    <span>{data.following}</span>
                </div>
            </div>
            <div class="profileFooter">
                <div class="profilebox">
                    <div class="profileInfo">
                        <div class="bottomIcon">
                            <img src={location} alt="" loading="lazy" />
                        </div>
                        <div className="ProfilData">
                            {(() => {
                                if (data.location === null) {
                                    return `Not Available`;
                                }
                                return data.location;
                            })()}
                        </div>
                    </div>

                    <div class="profileInfo">
                        <div class="bottomIcon">
                            <img src={website} alt="" loading="lazy" />
                        </div>
                        <div className="ProfilData">
                            {(() => {
                                if (data.email === null) {
                                    return `Not Available`;
                                }
                            })()}
                            {data.email}</div>
                    </div>

                    <div class="profileInfo">
                        <div class="bottomIcon">
                            <img src={twitter} alt="" loading="lazy" />
                        </div>
                        <div className="ProfilData">
                            {(() => {
                                if (data.twitter_username === null) {
                                    return `Not Available`;
                                }
                            })()}
                            {data.twitter_username}
                        </div>
                    </div>

                    <div class="profileInfo">
                        <div class="bottomIcon">
                            <img src={company} alt="" loading="lazy" />
                        </div>
                        <div className="ProfilData">
                            {(() => {
                                if (data.company === null) {
                                    return `Not Available`;
                                }
                            })()}
                            {data.company}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default DisplaySection;
