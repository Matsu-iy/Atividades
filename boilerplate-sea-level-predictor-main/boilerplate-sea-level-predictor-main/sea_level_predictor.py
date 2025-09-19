import pandas as pd
import matplotlib.pyplot as plt
from scipy.stats import linregress


def draw_plot():
    """Reads sea level data and creates a scatter plot with two lines of best fit.

    1. Scatter plot of the CSIRO Adjusted Sea Level vs Year.
    2. First line of best fit uses all data and is extended to year 2050.
    3. Second line of best fit uses data from year 2000 onward and is also extended to 2050.
    4. Adds appropriate labels, title, and xticks as expected by the tests.
    """
    # Read data
    df = pd.read_csv('epa-sea-level.csv')

    # Base figure/axis
    plt.figure(figsize=(10, 6))
    ax = plt.gca()

    # Scatter plot of all data
    ax.scatter(df['Year'], df['CSIRO Adjusted Sea Level'])

    # First regression (all data) extended to 2050
    res_all = linregress(df['Year'], df['CSIRO Adjusted Sea Level'])
    years_all = pd.Series(range(df['Year'].min(), 2051))
    fit_all = res_all.slope * years_all + res_all.intercept
    ax.plot(years_all, fit_all)

    # Second regression (from 2000)
    df_2000 = df[df['Year'] >= 2000]
    res_recent = linregress(df_2000['Year'], df_2000['CSIRO Adjusted Sea Level'])
    years_recent = pd.Series(range(2000, 2051))
    fit_recent = res_recent.slope * years_recent + res_recent.intercept
    ax.plot(years_recent, fit_recent)

    # Labels and title
    ax.set_xlabel('Year')
    ax.set_ylabel('Sea Level (inches)')
    ax.set_title('Rise in Sea Level')

    # Set x ticks to match test expectation (every 25 years from 1850 to 2075)
    ax.set_xticks([1850 + 25 * i for i in range(10)])

    # Save plot and return axis (DO NOT MODIFY)
    plt.savefig('sea_level_plot.png')
    return ax