"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Menu, X, ChevronDown } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <img 
              src="/logo1.png?v=2"
              alt="Sparks Pool Services Logo"
              className="h-8 w-8 sm:h-10 sm:w-10 object-contain"
            />
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg sm:text-xl text-gray-900">Sparks Pool Services</span>
              <span className="text-xs text-muted-foreground -mt-1">Veteran-Owned</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary transition-colors">
              Home
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-gray-700 hover:text-primary transition-colors">
                <span>Services</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                <DropdownMenuItem asChild>
                  <Link href="/residential" className="w-full">
                    Residential Cleaning
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/commercial" className="w-full">
                    Commercial Services
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/scrub-cleaning" className="w-full">
                    Deep Scrub Cleaning
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/service-areas" className="text-gray-700 hover:text-primary transition-colors">
              Service Areas
            </Link>
            <Button asChild>
              <Link href="/contact">Free Quote</Link>
            </Button>
            <Button asChild variant="default" className="bg-primary hover:bg-primary/90">
              <Link href="tel:727-234-4023">Call Us Today</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setIsOpen(!isOpen)} 
              className="min-h-[44px] min-w-[44px]"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden" id="mobile-menu" role="navigation" aria-label="Mobile navigation">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <Link
                href="/"
                className="block px-3 py-3 text-gray-700 hover:text-primary transition-colors min-h-[44px] flex items-center"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <div className="px-3 py-2">
                <span className="text-sm font-medium text-gray-900">Services</span>
              </div>
              <Link
                href="/residential"
                className="block px-6 py-3 text-gray-600 hover:text-primary transition-colors min-h-[44px] flex items-center"
                onClick={() => setIsOpen(false)}
              >
                Residential Cleaning
              </Link>
              <Link
                href="/commercial"
                className="block px-6 py-3 text-gray-600 hover:text-primary transition-colors min-h-[44px] flex items-center"
                onClick={() => setIsOpen(false)}
              >
                Commercial Services
              </Link>
              <Link
                href="/scrub-cleaning"
                className="block px-6 py-3 text-gray-600 hover:text-primary transition-colors min-h-[44px] flex items-center"
                onClick={() => setIsOpen(false)}
              >
                Deep Scrub Cleaning
              </Link>
              <Link
                href="/service-areas"
                className="block px-3 py-3 text-gray-700 hover:text-primary transition-colors min-h-[44px] flex items-center"
                onClick={() => setIsOpen(false)}
              >
                Service Areas
              </Link>
              <div className="px-3 py-2">
                <Button asChild className="w-full min-h-[48px]">
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    Free Quote
                  </Link>
                </Button>
              </div>
              <div className="px-3 py-2">
                <Button asChild className="w-full min-h-[48px] bg-primary hover:bg-primary/90">
                  <Link href="tel:727-234-4023" onClick={() => setIsOpen(false)}>
                    Call Us Today
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
