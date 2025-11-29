import type React from "react"
interface BrowserMockupProps {
    url: string
    children: React.ReactNode
}

export function BrowserMockup({ url, children }: BrowserMockupProps) {
    return (
        <div className="bg-lightground rounded-2xl overflow-hidden shadow-xl border border-border/50">
            {/* Browser Header */}
            <div className="bg-lightground px-4 py-3 flex items-center gap-4">
                {/* Traffic Lights */}
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                    <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                </div>

                {/* URL Bar */}
                <div className="flex-1 flex justify-center">
                    <div className="flex items-center gap-2 bg-hoverground rounded-full px-4 py-2 min-w-[300px] justify-center shadow-sm">
                        <svg className="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                            />
                        </svg>
                        <span className="text-sm text-foreground">{url}</span>
                        <svg className="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                            />
                        </svg>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                        />
                    </svg>
                    <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                </div>
            </div>

            {/* Browser Content */}
            <div className="bg-background">{children}</div>
        </div>
    )
}
