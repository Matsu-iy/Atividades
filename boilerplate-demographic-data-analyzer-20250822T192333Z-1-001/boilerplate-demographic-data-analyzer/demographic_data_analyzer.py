import pandas as pd

def calculate_demographic_data(print_data=True):
    
    # Leitura do dataset
    df = pd.read_csv("adult.data.csv")
    
    # 1. Quantidade de pessoas de cada raça
    race_count = df['race'].value_counts()

    # 2. Idade média dos homens
    average_age_men = round(df[df['sex'] == 'Male']['age'].mean(), 1)

    # 3. Percentual de pessoas com Bacharelado
    percentage_bachelors = round((df['education'] == 'Bachelors').mean() * 100, 1)

    # 4. % com educação avançada (Bachelors, Masters, Doctorate) que ganham >50K
    higher_education = df['education'].isin(['Bachelors', 'Masters', 'Doctorate'])
    higher_education_rich = round((df[higher_education]['salary'] == '>50K').mean() * 100, 1)

    # 5. % sem educação avançada que ganham >50K
    lower_education = ~higher_education
    lower_education_rich = round((df[lower_education]['salary'] == '>50K').mean() * 100, 1)

    # 6. Número mínimo de horas semanais
    min_work_hours = df['hours-per-week'].min()

    # 7. % dos que trabalham mínimo de horas e ganham >50K
    min_workers = df[df['hours-per-week'] == min_work_hours]
    rich_percentage = round((min_workers['salary'] == '>50K').mean() * 100, 1)

    # 8. País com maior % de pessoas com >50K
    country_rich_percent = (
        df[df['salary'] == '>50K']['native-country']
        .value_counts(normalize=True) * 100
    )
    highest_earning_country = country_rich_percent.idxmax()
    highest_earning_country_percentage = round(country_rich_percent.max(), 1)

    # 9. Ocupação mais comum na Índia entre os que ganham >50K
    top_IN_occupation = (
        df[(df['native-country'] == 'India') & (df['salary'] == '>50K')]
        ['occupation']
        .mode()[0]
    )

    # DO NOT MODIFY BELOW THIS LINE

    if print_data:
        print("Number of each race:\n", race_count) 
        print("Average age of men:", average_age_men)
        print(f"Percentage with Bachelors degrees: {percentage_bachelors}%")
        print(f"Percentage with higher education that earn >50K: {higher_education_rich}%")
        print(f"Percentage without higher education that earn >50K: {lower_education_rich}%")
        print(f"Min work time: {min_work_hours} hours/week")
        print(f"Percentage of rich among those who work fewest hours: {rich_percentage}%")
        print("Country with highest percentage of rich:", highest_earning_country)
        print(f"Highest percentage of rich people in country: {highest_earning_country_percentage}%")
        print("Top occupations in India:", top_IN_occupation)

    return {
        'race_count': race_count,
        'average_age_men': average_age_men,
        'percentage_bachelors': percentage_bachelors,
        'higher_education_rich': higher_education_rich,
        'lower_education_rich': lower_education_rich,
        'min_work_hours': min_work_hours,
        'rich_percentage': rich_percentage,
        'highest_earning_country': highest_earning_country,
        'highest_earning_country_percentage':
        highest_earning_country_percentage,
        'top_IN_occupation': top_IN_occupation
    }