export default function Footer() {
    return (
        <div className="flex flex-col items-center text-center relative -bottom-2 pb-4">
            <div className="text-sm">
                <p>Built and designed by Ramez Salman.</p>
                <p>All rights reserved. &copy; {new Date().getFullYear()}</p>
            </div>
        </div>   
    )
}