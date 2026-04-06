export function TimelineItem({title, role, period, detail, isLast}) {
    return (
        <div className={isLast ? "mt-5" : ""}>
            <h4 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">{title}</h4>
            <h4 className="text-lg md:text-xl mb-2 md:mb-4">{role}</h4>
            <p className="text-lg md:text-xl font-light italic mb-2 md:mb-4">{period}</p>
            <p className="text-lg md:text-xl font-light ">{detail}</p>
        </div>
    );
}