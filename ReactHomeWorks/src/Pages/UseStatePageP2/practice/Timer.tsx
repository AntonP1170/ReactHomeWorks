import {useEffect, useState} from "react";

type Colors = {
    morning: string;
    day: string
    evening: string;
}

type Font = {
    family: string;
    size: number;
    color: string;
}
const DEFAULT_COLORS: Colors = {morning: "yellow", day: "skyblue", evening: "black"};
const DEFAULT_FONT: Font = {family: "Arial", size: 24, color: "black"};


const Timer = () => {
    const [date, setDate] = useState<Date>(new Date());
    const [colors, setColors] = useState<Colors>(DEFAULT_COLORS);
    const [savedColors, setSavedColors] = useState<Colors | null>(null);
    const [font, setFont] = useState<Font>(DEFAULT_FONT);
    const [savedFont, setSavedFont] = useState<Font | null>(null);
    const [isShowDate, setIsShowDate] = useState<boolean>(false);

    const getColorByHour = (hour: number, colors: Colors) => {
        if (hour > 1 && hour < 12) return colors.morning;
        if (hour >= 12 && hour < 18) return colors.day;
        return colors.evening;
    }

    const updateColor = (key: keyof Colors, value: string) => {
        setColors((prev) => ({...prev, [key]: value}));
    }

    const updateFont = <K extends keyof Font>(key: K, value: Font[K]) => {
        setFont((prev) => ({...prev, [key]: value}));
    }

    const saveColors = () => {
        setSavedColors({
            morning: colors.morning.trim() || DEFAULT_COLORS.morning,
            day: colors.day.trim() || DEFAULT_COLORS.day,
            evening: colors.evening.trim() || DEFAULT_COLORS.evening,
        });
        setSavedFont({
            family: font.family.trim() || DEFAULT_FONT.family,
            size: font.size || DEFAULT_FONT.size,
            color: font.color || DEFAULT_FONT.color,
        });
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    }, [])

    const background = savedColors ? getColorByHour(date.getHours(), savedColors) : "";
    const dateFont = savedFont ?? DEFAULT_FONT;
    return (
        <>
            {savedColors ? (<>
                <h2 style={{
                    backgroundColor: background,
                    fontFamily: dateFont.family,
                    fontSize: `${dateFont.size}px`,
                    color: dateFont.color,
                }}>{isShowDate && date.toLocaleDateString()}-{date.toLocaleTimeString()}</h2>
            </>) : (
                <>
                    <label htmlFor="morningColor">Morning color</label>
                    <input
                        type="text"
                        id="morningColor"
                        value={colors.morning}
                        onChange={(e) => updateColor("morning", e.target.value)}
                    />
                    <br/>
                    <label htmlFor="dayColor">Day color</label>
                    <input
                        type="text"
                        id="dayColor"
                        value={colors.day}
                        onChange={(e) => updateColor("day", e.target.value)}
                    />
                    <br/>
                    <label htmlFor="eveningColor">Evening color</label>
                    <input
                        type="text"
                        id="eveningColor"
                        value={colors.evening}
                        onChange={(e) => updateColor("evening", e.target.value)}
                    />
                    <br/>
                    <label htmlFor="fontFamily">Font name</label>
                    <input
                        type="text"
                        id="fontFamily"
                        value={font.family}
                        onChange={(e) => updateFont("family", e.target.value)}
                    />
                    <br/>
                    <label htmlFor="fontSize">Font size</label>
                    <input
                        type="number"
                        id="fontSize"
                        min={8}
                        max={100}
                        value={font.size}
                        onChange={(e) => updateFont("size", Number(e.target.value))}
                    />
                    <br/>
                    <label htmlFor="fontColor">Font color</label>
                    <input
                        type="color"
                        id="fontColor"
                        value={font.color}
                        onChange={(e) => updateFont("color", e.target.value)}
                    />
                    <br/>
                    <label htmlFor="showDate">Show date?</label>
                    <input
                        type="checkbox"
                        id="showDate"
                        checked={isShowDate}
                        onChange={(e) => setIsShowDate(e.target.checked)}
                    />
                    <br/>
                    <button onClick={saveColors}>Save</button>
                </>
            )}
        </>
    )
}
export default Timer