import { useState } from "react";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const bookedEvents = [
  { date: "03/21/2026", name: "Paula", location: "Armistice" },
  { date: "03/21/2026", name: "Marielis", location: "Central" },
  { date: "03/21/2026", name: "Andreana", location: "Main St" },
  { date: "03/22/2026", name: "Elizabeth", location: "Armistice" },
  { date: "03/23/2026", name: "Evelia", location: "Central" },
  { date: "03/28/2026", name: "Tiandra", location: "Armistice" },
  { date: "03/28/2026", name: "Stacia", location: "Central" },
  { date: "03/28/2026", name: "Yarelis", location: "Main St" },
  { date: "03/29/2026", name: "Domingo", location: "Armistice" },
  { date: "03/29/2026", name: "Stefany", location: "Central" },
  { date: "04/04/2026", name: "Jackeline", location: "Armistice" },
  { date: "04/04/2026", name: "Jeremy", location: "Central" },
  { date: "04/04/2026", name: "Christina", location: "Main St" },
  { date: "04/05/2026", name: "Lemuneika", location: "Armistice" },
  { date: "04/11/2026", name: "Maria", location: "Armistice" },
  { date: "04/11/2026", name: "Ana", location: "Central" },
  { date: "04/12/2026", name: "Krystal", location: "Central" },
  { date: "04/18/2026", name: "Faith", location: "Armistice" },
  { date: "04/18/2026", name: "Casandra", location: "Central" },
  { date: "04/18/2026", name: "Daniel", location: "Main St" },
  { date: "04/25/2026", name: "Cheyanne", location: "Armistice" },
  { date: "04/25/2026", name: "George", location: "Central" },
  { date: "04/25/2026", name: "Natanael", location: "Main St" },
  { date: "05/02/2026", name: "Tory", location: "Armistice" },
  { date: "05/02/2026", name: "Amanda", location: "Central" },
  { date: "05/02/2026", name: "Anna", location: "Main St" },
  { date: "05/09/2026", name: "Sasha", location: "Armistice" },
  { date: "05/16/2026", name: "Jen", location: "Armistice" },
  { date: "05/16/2026", name: "Ana", location: "Central" },
  { date: "05/16/2026", name: "Dayna", location: "Main St" },
];

export default function Schedule() {
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [selectedMonth, setSelectedMonth] = useState(new Date(2026, 2)); // March 2026

  const locations = ["All", "Armistice", "Central", "Main St"];

  const filteredEvents = selectedLocation === "All"
    ? bookedEvents
    : bookedEvents.filter(event => event.location === selectedLocation);

  const monthEvents = filteredEvents.filter(event => {
    const eventDate = new Date(event.date);
    return eventDate.getMonth() === selectedMonth.getMonth() &&
           eventDate.getFullYear() === selectedMonth.getFullYear();
  });

  const handlePrevMonth = () => {
    setSelectedMonth(new Date(selectedMonth.getFullYear(), selectedMonth.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setSelectedMonth(new Date(selectedMonth.getFullYear(), selectedMonth.getMonth() + 1));
  };

  const monthName = selectedMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-background to-accent/5">
        <div className="container">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Event Schedule</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Check availability across our three locations and book your preferred date
          </p>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Filters */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Filter by Location</h2>
              <div className="flex flex-wrap gap-3">
                {locations.map(location => (
                  <button
                    key={location}
                    onClick={() => setSelectedLocation(location)}
                    className={`px-6 py-2 rounded-full font-medium transition-all ${
                      selectedLocation === location
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-foreground hover:bg-muted/80"
                    }`}
                  >
                    {location}
                  </button>
                ))}
              </div>
            </div>

            {/* Month Navigation */}
            <div className="card-elegant p-8 mb-8">
              <div className="flex items-center justify-between mb-8">
                <button
                  onClick={handlePrevMonth}
                  className="p-2 hover:bg-muted rounded-lg transition-colors"
                >
                  <ChevronLeft size={24} />
                </button>
                <h3 className="text-2xl font-bold">{monthName}</h3>
                <button
                  onClick={handleNextMonth}
                  className="p-2 hover:bg-muted rounded-lg transition-colors"
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              {/* Events List */}
              {monthEvents.length > 0 ? (
                <div className="space-y-3">
                  {monthEvents.map((event, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <Calendar size={20} className="text-primary" />
                        <div>
                          <p className="font-semibold">{event.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {new Date(event.date).toLocaleDateString('en-US', {
                              weekday: 'long',
                              month: 'short',
                              day: 'numeric'
                            })}
                          </p>
                        </div>
                      </div>
                      <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {event.location}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <Calendar size={48} className="mx-auto text-muted-foreground/50 mb-4" />
                  <p className="text-muted-foreground">No events scheduled for this month</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    This is a great time to book your event!
                  </p>
                </div>
              )}
            </div>

            {/* Availability Info */}
            <div className="bg-accent/10 border-l-4 border-primary p-6 rounded-lg">
              <h4 className="font-semibold mb-2">How to Check Availability</h4>
              <p className="text-muted-foreground text-sm">
                If you don't see a date listed for your preferred location, it's available! Simply contact us to reserve your spot with a $100 security deposit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* All Bookings Table */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">All Upcoming Bookings</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left py-3 px-4 font-semibold">Date</th>
                  <th className="text-left py-3 px-4 font-semibold">Event Name</th>
                  <th className="text-left py-3 px-4 font-semibold">Location</th>
                </tr>
              </thead>
              <tbody>
                {filteredEvents.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()).map((event, idx) => (
                  <tr key={idx} className="border-b border-border hover:bg-background/50 transition-colors">
                    <td className="py-3 px-4">
                      {new Date(event.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </td>
                    <td className="py-3 px-4 font-medium">{event.name}</td>
                    <td className="py-3 px-4">
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                        {event.location}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Book Your Date?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today to reserve your preferred location and date
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:401-527-0017">
              <Button className="btn-primary">
                Call: (401) 527-0017
              </Button>
            </a>
            <a href="mailto:armistice@boulevardhall.com">
              <Button className="btn-secondary">
                Email Us
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
