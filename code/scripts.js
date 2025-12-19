const targetDate = new Date("2026-09-18T00:00:00");

    function updateCountdown() {
      const now = new Date();

      let totalMonths =
        (targetDate.getFullYear() - now.getFullYear()) * 12 +
        (targetDate.getMonth() - now.getMonth());

      let days = targetDate.getDate() - now.getDate();

      if (days < 0) {
        totalMonths--;
        const lastMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
        days += lastMonth.getDate();
      }

      let hours = targetDate.getHours() - now.getHours();
      let minutes = targetDate.getMinutes() - now.getMinutes();
      let seconds = targetDate.getSeconds() - now.getSeconds();

      if (seconds < 0) { seconds += 60; minutes--; }
      if (minutes < 0) { minutes += 60; hours--; }
      if (hours < 0) { hours += 24; days--; }

      document.getElementById("countdown").textContent =
        `${totalMonths} months ${days} days ${hours}h ${minutes}m ${seconds}s`;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);