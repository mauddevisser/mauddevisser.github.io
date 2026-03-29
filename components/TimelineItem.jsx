export function TimelineItem({title, role, period, isLast}) {
    return (
        <div className={isLast ? "mt-5 md:mt-14" : ""}>
            <h4 className="text-xl md:text-2xl font-semibold mb-2 md:mb-5">{title}</h4>
            <h4 className="text-lg md:text-xl mb-2 md:mb-5">{role}</h4>
            <p className="text-lg md:text-xl font-light italic">{period}</p>
        </div>
    );
}