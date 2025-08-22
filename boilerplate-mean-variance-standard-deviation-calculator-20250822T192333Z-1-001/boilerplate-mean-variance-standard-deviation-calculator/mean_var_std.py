import numpy as np

def calculate(numbers):
    if len(numbers) != 9:
        raise ValueError("List must contain nine numbers.")
    
    matrix = np.array(numbers).reshape(3, 3)
    
    def to_list(arr):
        return arr.tolist()
    
    calculations = {
        'mean': [
            to_list(np.mean(matrix, axis=0)),
            to_list(np.mean(matrix, axis=1)),
            np.mean(matrix).item()
        ],
        'variance': [
            to_list(np.var(matrix, axis=0)), 
            to_list(np.var(matrix, axis=1)), 
            np.var(matrix).item()
        ],
        'standard deviation': [
            to_list(np.std(matrix, axis=0)), 
            to_list(np.std(matrix, axis=1)), 
            np.std(matrix).item()
        ],
        'max': [
            to_list(np.max(matrix, axis=0)), 
            to_list(np.max(matrix, axis=1)), 
            np.max(matrix).item()
        ],
        'min': [
            to_list(np.min(matrix, axis=0)), 
            to_list(np.min(matrix, axis=1)), 
            np.min(matrix).item()
        ],
        'sum': [
            to_list(np.sum(matrix, axis=0)), 
            to_list(np.sum(matrix, axis=1)), 
            np.sum(matrix).item()
        ]
    }
    
    return calculations